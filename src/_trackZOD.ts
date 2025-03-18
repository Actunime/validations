import { TrackTypeArray, ITrack } from "@actunime/types";
import { z } from "zod";
import { Create_Link_ZOD, DateBody, FromBody, LinkBody, MediaTitleBody } from "./_media";
import { PersonAddBody, PersonBody } from "./_personZOD";
import { PaginationBody, zodNumber } from "./_util";
import { Add_Image_ZOD, ImageBody } from "./_imageZOD";
import { PatchParamsBody } from "./_patchZOD";

export const TrackQueryBody = z.object({
  name: MediaTitleBody.partial(),
  type: z.enum(TrackTypeArray),
  releaseDate: z.optional(DateBody.partial()),
  artists: PersonBody.partial(),
  cover: ImageBody.partial(),
  links: LinkBody.partial(),
  description: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const check = (v: number) => [-1, 1].includes(v);
const checkErr = "le sort doit être soit -1 ou 1";
export const TrackSortBody = z.object({
  type: zodNumber().refine(check, checkErr),
  releaseDate: zodNumber().refine(check, checkErr),
  createdAt: zodNumber().refine(check, checkErr),
  updatedAt: zodNumber().refine(check, checkErr),
})

export const TrackPaginationBody = PaginationBody.extend({
  sort: TrackSortBody.partial(),
  query: TrackQueryBody.partial(),
  from: FromBody,
}).partial()

export type ITrackPaginationBody = z.infer<typeof TrackPaginationBody>;

export const Track_Pagination_ZOD = z.object({
  page: z.number(),
  limit: z.number(),
  strict: z.boolean(),
  sort: TrackSortBody.partial(),
  query: TrackQueryBody.partial()
})

export type ITrack_Pagination_ZOD = z.infer<typeof Track_Pagination_ZOD>;

export const TrackBody = z.object({
  name: MediaTitleBody,
  type: z.enum(TrackTypeArray),
  releaseDate: z.optional(DateBody.partial()),
  artists: z.optional(z.array(PersonAddBody)),
  cover: z.optional(Add_Image_ZOD),
  description: z.optional(z.string()),
  links: z.optional(z.array(Create_Link_ZOD)),
}).strict();

export type ITrackBody = z.infer<typeof TrackBody>;

export const TrackCreateBody = PatchParamsBody.partial().extend({
  data: TrackBody
})

export type ITrackCreateBody = z.infer<typeof TrackCreateBody>;

export const TrackAddBody = z.object({
  id: z.optional(z.string()),
  newTrack: z.optional(TrackBody),
});

export type ITrackAddBody = z.infer<typeof TrackAddBody>;

export const TrackDataToZOD = (data: ITrack) => {
  if (!data) return;

  const toZOD: ITrackBody = {
    name: data.name,
    type: data.type,
    releaseDate: data.releaseDate,
    cover: data.cover,
    artists: data.artists,
    description: data.description,
    links: data.links,
  };

  const safeParse = TrackBody.safeParse(toZOD);

  if (safeParse.success) return safeParse.data;

  return toZOD;
};
