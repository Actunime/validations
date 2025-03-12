import { TrackTypeArray, dateToZod, ITrack } from "@actunime/types";
import { z } from "zod";
import { Create_Link_ZOD, FromBody, LinkBody } from "./_media";
import { Add_Person_ZOD, PersonBody } from "./_personZOD";
import { PaginationBody, zodNumber } from "./_util";
import { Add_Image_ZOD, ImageBody } from "./_imageZOD";
import { PatchParamsBody } from "./_patchZOD";

export const TrackQueryBody = z.object({
  name: z.object({ default: z.string(), native: z.optional(z.string()) }),
  type: z.enum(TrackTypeArray),
  pubDate: z.string(),
  artists: PersonBody.partial(),
  cover: ImageBody.partial(),
  links: LinkBody.partial(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const check = (v: number) => [-1, 1].includes(v);
const checkErr = "le sort doit être soit -1 ou 1";
export const TrackSortBody = z.object({
  type: zodNumber().refine(check, checkErr),
  pubDate: zodNumber().refine(check, checkErr),
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

export const Create_Track_ZOD = z
  .object({
    name: z.object({ default: z.string(), native: z.optional(z.string()) }),
    type: z.enum(TrackTypeArray),
    pubDate: z.optional(z.string()),
    artists: z.optional(z.array(Add_Person_ZOD)),
    cover: z.optional(Add_Image_ZOD),
    links: z.optional(z.array(Create_Link_ZOD)),
  })
  .strict();

export type ICreate_Track_ZOD = z.infer<typeof Create_Track_ZOD>;

export const TrackCreateBody = PatchParamsBody.partial().extend({
  data: Create_Track_ZOD
})

export type ITrackCreateBody = z.infer<typeof TrackCreateBody>;

export const Create_Track_ZOD_FORM = z.object({
  note: z.string().optional(),
  data: Create_Track_ZOD,
});

export type ICreate_Track_ZOD_FORM = z.infer<typeof Create_Track_ZOD_FORM>;


export const Add_Track_ZOD = z.object({
  id: z.optional(z.string()),
  newTrack: z.optional(Create_Track_ZOD),
});

export type IAdd_Track_ZOD = z.infer<typeof Add_Track_ZOD>;

export const TrackDataToZOD = (data: ITrack) => {
  if (!data) return;

  const toZOD: ICreate_Track_ZOD = {
    name: data.name,
    type: data.type as any,
    pubDate: dateToZod(data.pubDate),
    cover: data.cover,
    artists: data.artists,
  };

  const safeParse = Create_Track_ZOD.safeParse(toZOD);

  if (safeParse.success) return safeParse.data;

  return toZOD;
};
