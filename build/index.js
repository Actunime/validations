// src/database/_accountDatabaseZOD.ts
import { z as z2 } from "zod";

// src/_util.ts
import { z } from "zod";
var zodBoolean = () => z.union([z.boolean(), z.literal("true"), z.literal("false")]).transform((value) => value === true || value === "true");
var zodNumber = () => z.union([z.number(), z.string()]).transform(
  (value) => typeof value === "string" ? parseInt(value) : value
);
var zodDate = () => z.union([z.date(), z.string()]).transform(
  (value) => typeof value === "string" ? new Date(value) : value
);
var PaginationBody = z.object({
  page: z.number(),
  limit: z.number(),
  strict: z.boolean(),
  onlyVerified: z.boolean(),
  sort: z.any(),
  query: z.any()
});

// src/database/_accountDatabaseZOD.ts
var AccountDatabase_Pagination_ZOD = z2.object({
  page: zodNumber(),
  limit: zodNumber(),
  query: z2.object({
    id: z2.string()
  }).partial().strict(),
  strict: z2.boolean().optional(),
  sort: z2.object({
    createdAt: z2.enum(["DESC", "ASC"]).optional(),
    updatedAt: z2.enum(["DESC", "ASC"]).optional()
  }),
  with: z2.object({}).partial().strict()
}).partial().strict();

// src/database/_userDatabaseZOD.ts
import { UserRolesArray } from "@actunime/types";
import { z as z3 } from "zod";
var UserDatabase_Pagination_ZOD = z3.object({
  page: zodNumber(),
  limit: zodNumber(),
  query: z3.object({
    displayName: z3.string(),
    username: z3.string(),
    id: z3.string(),
    roles: z3.array(z3.enum(UserRolesArray))
  }).partial().strict(),
  strict: z3.boolean().optional(),
  sort: z3.object({
    createdAt: z3.enum(["DESC", "ASC"]).optional(),
    updatedAt: z3.enum(["DESC", "ASC"]).optional()
  }),
  with: z3.object({}).partial().strict()
}).partial().strict();

// src/_activityZOD.ts
import {
  ActivityActionArray,
  ActivityTypeArray,
  TargetPathArray
} from "@actunime/types";
import { z as z4 } from "zod";
var ActivityQueryBody = z4.object({
  type: z4.enum(ActivityTypeArray),
  action: z4.enum(ActivityActionArray),
  author: z4.string().optional(),
  targets: z4.array(z4.object({ path: z4.enum(TargetPathArray), id: z4.string() })),
  createdAt: z4.string(),
  updatedAt: z4.string()
});
var check = (v) => [-1, 1].includes(v);
var checkErr = "le sort doit \xEAtre soit -1 ou 1";
var ActivitySortBody = z4.object({
  type: z4.number().refine(check, checkErr),
  action: z4.number().refine(check, checkErr),
  createdAt: z4.number().refine(check, checkErr),
  updatedAt: z4.number().refine(check, checkErr)
});
var ActivityPaginationBody = PaginationBody.extend({
  sort: ActivitySortBody.partial(),
  query: ActivityQueryBody.partial()
});

// src/_animeZOD.ts
import { z as z14 } from "zod";

// src/_characterZOD.ts
import {
  CharacterGenderArray,
  CharacterRoleArray,
  CharacterSpeciesArray
} from "@actunime/types";
import { z as z9 } from "zod";

// src/_personZOD.ts
import { z as z8 } from "zod";

// src/_media.ts
import { z as z5 } from "zod";
import {
  TargetPathArray as TargetPathArray2
} from "@actunime/types";
var DateBody = z5.object({
  year: z5.optional(zodNumber()),
  month: z5.optional(zodNumber()),
  day: z5.optional(zodNumber()),
  hours: z5.optional(zodNumber()),
  minutes: z5.optional(zodNumber()),
  seconds: z5.optional(zodNumber())
});
var check2 = (v) => [-1, 1].includes(v);
var checkErr2 = "le sort doit \xEAtre soit -1 ou 1";
var DateSortBody = z5.object({
  year: z5.optional(zodNumber().refine(check2, checkErr2)),
  month: z5.optional(zodNumber().refine(check2, checkErr2)),
  day: z5.optional(zodNumber().refine(check2, checkErr2)),
  hours: z5.optional(zodNumber().refine(check2, checkErr2)),
  minutes: z5.optional(zodNumber().refine(check2, checkErr2)),
  seconds: z5.optional(zodNumber().refine(check2, checkErr2))
});
var MediaDateBody = z5.object({
  start: DateBody,
  end: DateBody
});
var MediaDateSortBody = z5.object({
  start: z5.optional(DateSortBody),
  end: z5.optional(DateSortBody)
});
var MediaImageZodSchema = z5.object({
  cover: z5.optional(z5.string()),
  banner: z5.optional(z5.string())
});
var urlRegex = /^(https:\/\/)?([a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?)$/;
var MediaLinkBody = z5.object({
  name: z5.string().trim(),
  value: z5.string().trim().regex(urlRegex, "Lien HTTPS invalide")
});
var MediaTitleBody = z5.object({
  original: z5.string().trim().min(2, "le nom doit contenir au moins 2 caract\xE8res"),
  alias: z5.optional(
    z5.array(
      z5.string().trim().min(2, "le nom doit contenir au moins 2 caract\xE8res")
    )
  )
});
var youtubeUrlRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
var YoutubeURLStringBody = z5.string().trim().regex(youtubeUrlRegex, {
  message: "L'URL doit \xEAtre une URL de vid\xE9o YouTube valide."
});
var FromBody = z5.object({
  id: z5.string(),
  path: z5.enum(TargetPathArray2)
});
var MediaDeleteBody = z5.object({
  reason: z5.string(),
  reccursive: z5.boolean()
});
var MediaVerifyBody = z5.object({
  reason: z5.string(),
  reccursive: z5.boolean()
});

// src/_imageZOD.ts
import { z as z7 } from "zod";
import { ImageLabelArray, TargetPathArray as TargetPathArray4 } from "@actunime/types";

// src/_patchZOD.ts
import { z as z6 } from "zod";
import {
  TargetPathArray as TargetPathArray3,
  PatchStatusArray,
  PatchTypeArray
} from "@actunime/types";
var PatchQueryBody = z6.object({
  id: z6.string(),
  ref: z6.object({ id: z6.string() }),
  type: z6.enum(PatchTypeArray),
  status: z6.enum(PatchStatusArray),
  target: z6.object({ id: z6.string() }),
  targetPath: z6.enum(TargetPathArray3),
  description: z6.string(),
  reason: z6.string(),
  original: z6.any(),
  changes: z6.any(),
  isChangesUpdated: z6.boolean(),
  author: z6.object({ id: z6.string() }),
  moderator: z6.object({ id: z6.string() }),
  createdAt: z6.string().refine((v) => !isNaN(Date.parse(v)), "Date invalide"),
  updatedAt: z6.string().refine((v) => !isNaN(Date.parse(v)), "Date invalide")
});
var check3 = (v) => [-1, 1].includes(v);
var checkErr3 = "le sort doit \xEAtre soit -1 ou 1";
var PatchSortBody = z6.object({
  id: z6.number().refine(check3, checkErr3),
  ref: z6.object({ id: z6.number().refine(check3, checkErr3) }),
  type: z6.number().refine(check3, checkErr3),
  status: z6.number().refine(check3, checkErr3),
  target: z6.number().refine(check3, checkErr3),
  targetPath: z6.number().refine(check3, checkErr3),
  description: z6.number().refine(check3, checkErr3),
  reason: z6.number().refine(check3, checkErr3),
  isChangesUpdated: z6.number().refine(check3, checkErr3),
  author: z6.object({ id: z6.number().refine(check3, checkErr3) }),
  moderator: z6.object({ id: z6.number().refine(check3, checkErr3) }),
  createdAt: z6.number().refine(check3, checkErr3),
  updatedAt: z6.number().refine(check3, checkErr3)
});
var PatchPaginationBody = PaginationBody.extend({
  sort: PatchSortBody.partial(),
  query: PatchQueryBody.partial()
});
var PatchParamsBody = z6.object({
  description: z6.string(),
  reason: z6.string()
});
var Patch_Pagination_ZOD = z6.object({
  page: zodNumber(),
  limit: zodNumber(),
  strict: z6.boolean().optional(),
  sort: z6.object({
    updaptedAt: z6.enum(["DESC", "ASC"]).optional(),
    createdAt: z6.enum(["DESC", "ASC"]).optional()
  }).partial().strict(),
  query: z6.object({
    target: z6.optional(z6.string()),
    targetPath: z6.optional(
      z6.union([z6.enum(TargetPathArray3), z6.array(z6.enum(TargetPathArray3))])
    ),
    author: z6.optional(z6.string()),
    status: z6.optional(
      z6.union([
        z6.array(z6.enum(PatchStatusArray)),
        z6.enum(PatchStatusArray)
      ])
    ),
    // actionLabel: z.optional(z.enum(PatchActionArray)),
    actionUser: z6.optional(z6.string()),
    type: z6.optional(
      z6.union([z6.enum(TargetPathArray3), z6.array(z6.enum(PatchTypeArray))])
    ),
    ref: z6.optional(z6.string())
  }).partial().strict(),
  with: z6.object({
    author: z6.boolean().optional(),
    target: z6.boolean().optional(),
    actions: z6.boolean().optional(),
    ref: z6.boolean().optional()
  }).partial().strict()
}).partial().strict();
var Patch_Action_ZOD = z6.object({
  // label: z.enum(PatchActionArray),
  note: z6.string(),
  changes: z6.any().optional()
});
var AddChangesToPatch_ZOD = z6.object({
  id: z6.string(),
  note: z6.string().optional(),
  data: z6.any()
}).strict();
var AcceptChangesToPatch_ZOD = z6.object({
  id: z6.string(),
  moderatorNote: z6.string().optional()
}).strict();
var DenyChangesToPatch_ZOD = z6.object({
  id: z6.string(),
  moderatorNote: z6.string().optional()
}).strict();
var DeletePatch_ZOD = z6.object({
  id: z6.string(),
  moderatorNote: z6.string().optional()
}).strict();

// src/_imageZOD.ts
var ImageQueryBody = z7.object({
  label: z7.enum(ImageLabelArray),
  createdAt: z7.string(),
  updatedAt: z7.string()
});
var check4 = (v) => [-1, 1].includes(v);
var checkErr4 = "le sort doit \xEAtre soit -1 ou 1";
var ImageSortBody = z7.object({
  label: zodNumber().refine(check4, checkErr4),
  createdAt: zodNumber().refine(check4, checkErr4),
  updatedAt: zodNumber().refine(check4, checkErr4)
});
var ImagePaginationBody = PaginationBody.extend({
  sort: ImageSortBody.partial(),
  query: ImageQueryBody.partial(),
  from: FromBody
}).partial();
var ImageBody = z7.object({
  label: z7.enum(ImageLabelArray),
  value: z7.string(),
  targetPath: z7.enum(TargetPathArray4)
});
var ImageCreateBody = PatchParamsBody.partial().extend({
  data: ImageBody
});
var ImageAddBody = z7.object({
  id: z7.optional(z7.string()),
  label: z7.optional(z7.enum(ImageLabelArray)),
  newImage: z7.optional(ImageBody.partial({ targetPath: true }))
});
var ImageDataToZOD = (data) => {
  if (!data) return;
  const toZOD = {
    value: data.url,
    label: data.label,
    targetPath: data.targetPath
  };
  const safeParse = ImageBody.safeParse(toZOD);
  if (safeParse.success) return safeParse.data;
  return toZOD;
};

// src/_personZOD.ts
import { PersonRoleArray } from "@actunime/types";
var PersonQueryBody = z8.object({
  isGroupe: z8.boolean(),
  name: MediaTitleBody.partial(),
  birthDate: z8.string(),
  deathDate: z8.string(),
  avatar: ImageBody.partial(),
  links: MediaLinkBody.partial(),
  createdAt: z8.string(),
  updatedAt: z8.string()
});
var check5 = (v) => [-1, 1].includes(v);
var checkErr5 = "le sort doit \xEAtre soit -1 ou 1";
var PersonSortBody = z8.object({
  isGroupe: zodNumber().refine(check5, checkErr5),
  birthDate: zodNumber().refine(check5, checkErr5),
  deathDate: zodNumber().refine(check5, checkErr5),
  createdAt: zodNumber().refine(check5, checkErr5),
  updatedAt: zodNumber().refine(check5, checkErr5)
});
var PersonPaginationBody = PaginationBody.extend({
  sort: PersonSortBody.partial(),
  query: PersonQueryBody.partial(),
  from: FromBody
}).partial();
var PersonBody = z8.object({
  isGroupe: z8.optional(z8.boolean()),
  name: MediaTitleBody,
  birthDate: z8.optional(DateBody.partial()),
  deathDate: z8.optional(DateBody.partial()),
  description: z8.optional(z8.string()),
  avatar: z8.optional(ImageAddBody),
  links: z8.optional(z8.array(MediaLinkBody))
}).strict();
var PersonCreateBody = PatchParamsBody.partial().extend({
  data: PersonBody
});
var PersonAddBody = z8.object({
  id: z8.optional(z8.string()),
  newPerson: z8.optional(PersonBody),
  role: z8.optional(z8.enum(PersonRoleArray))
});
var PersonDataToZOD = (data) => {
  if (!data) return;
  const toZOD = {
    isGroupe: data.isGroupe,
    name: data.name,
    birthDate: data.birthDate,
    deathDate: data.deathDate,
    description: data.description,
    avatar: data.avatar,
    links: data.links
  };
  const safeParse = PersonBody.safeParse(toZOD);
  if (safeParse.success) return safeParse.data;
  return toZOD;
};

// src/_characterZOD.ts
var CharacterQueryBody = z9.object({
  name: MediaTitleBody.partial(),
  age: zodNumber(),
  birthDate: z9.optional(DateBody.partial()),
  avatar: ImageBody.partial(),
  gender: z9.enum(CharacterGenderArray),
  species: z9.enum(CharacterSpeciesArray),
  actors: PersonBody.partial(),
  createdAt: z9.string(),
  updatedAt: z9.string()
});
var check6 = (v) => [-1, 1].includes(v);
var checkErr6 = "le sort doit \xEAtre soit -1 ou 1";
var CharacterSortBody = z9.object({
  age: zodNumber().refine(check6, checkErr6),
  birthDate: zodNumber().refine(check6, checkErr6),
  gender: zodNumber().refine(check6, checkErr6),
  species: zodNumber().refine(check6, checkErr6),
  createdAt: zodNumber().refine(check6, checkErr6),
  updatedAt: zodNumber().refine(check6, checkErr6)
});
var CharacterPaginationBody = PaginationBody.extend({
  sort: CharacterSortBody.partial(),
  query: CharacterQueryBody.partial(),
  from: FromBody
}).partial();
var CharacterBody = z9.object({
  name: MediaTitleBody,
  age: z9.optional(zodNumber()),
  birthDate: z9.optional(DateBody.partial()),
  gender: z9.optional(z9.enum(CharacterGenderArray)),
  species: z9.optional(z9.enum(CharacterSpeciesArray)),
  description: z9.optional(z9.string()),
  avatar: z9.optional(ImageAddBody),
  actors: z9.optional(z9.array(PersonAddBody.omit({ role: true })))
});
var CharacterCreateBody = PatchParamsBody.partial().extend({
  data: CharacterBody
});
var CharacterAddBody = z9.object({
  id: z9.optional(z9.string()),
  newCharacter: z9.optional(CharacterBody),
  role: z9.optional(
    z9.enum(CharacterRoleArray, { required_error: "Le role est requis" })
  )
});
var CharacterDataToZOD = (data) => {
  if (!data) return;
  const toZOD = {
    name: data.name,
    age: data.age,
    birthDate: data.birthDate,
    gender: data.gender,
    species: data.species,
    description: data.description,
    avatar: data.avatar,
    actors: data.actors
  };
  const safeParse = CharacterBody.safeParse(toZOD);
  if (safeParse.success) return safeParse.data;
  return toZOD;
};

// src/_companyZOD.ts
import { z as z10 } from "zod";
var CompanyQueryBody = z10.object({
  type: z10.enum(["STUDIO", "PRODUCER"]),
  name: MediaTitleBody.partial(),
  links: MediaLinkBody.partial(),
  logo: ImageBody.partial(),
  createdDate: z10.optional(DateBody.partial()),
  createdAt: z10.string(),
  updatedAt: z10.string()
});
var check7 = (v) => [-1, 1].includes(v);
var checkErr7 = "le sort doit \xEAtre soit -1 ou 1";
var CompanySortBody = z10.object({
  type: zodNumber().refine(check7, checkErr7),
  createdDate: z10.object({
    year: zodNumber().refine(check7, checkErr7),
    month: zodNumber().refine(check7, checkErr7),
    day: zodNumber().refine(check7, checkErr7)
  }),
  createdAt: zodNumber().refine(check7, checkErr7),
  updatedAt: zodNumber().refine(check7, checkErr7)
});
var CompanyPaginationBody = PaginationBody.extend({
  sort: CompanySortBody.partial(),
  query: CompanyQueryBody.partial(),
  from: FromBody
}).partial();
var Company_Pagination_ZOD = z10.object({
  page: z10.number(),
  limit: z10.number(),
  strict: z10.boolean(),
  sort: CompanySortBody.partial(),
  query: CompanyQueryBody.partial()
});
var CompanyBody = z10.object({
  type: z10.enum(["STUDIO", "PRODUCER"]),
  name: MediaTitleBody,
  description: z10.optional(z10.string()),
  links: z10.optional(z10.array(MediaLinkBody)),
  logo: z10.optional(ImageAddBody),
  createdDate: z10.optional(DateBody.partial())
}).strict();
var CompanyCreateBody = PatchParamsBody.partial().extend({
  data: CompanyBody
});
var CompanyAddBody = z10.object({
  id: z10.optional(z10.string()),
  newCompany: z10.optional(CompanyBody)
});
var CompanyDataToZOD = (data) => {
  if (!data) return;
  const toZOD = {
    type: data.type,
    name: data.name,
    description: data.description,
    links: data.links,
    logo: data.logo,
    createdDate: data.createdDate
  };
  const safeParse = CompanyBody.safeParse(toZOD);
  if (safeParse.success) return safeParse.data;
  return toZOD;
};

// src/_groupeZOD.ts
import { z as z11 } from "zod";
var GroupeQueryBody = z11.object({
  name: MediaTitleBody.partial()
});
var check8 = (v) => [-1, 1].includes(v);
var checkErr8 = "le sort doit \xEAtre soit -1 ou 1";
var GroupeSortBody = z11.object({
  name: z11.number().refine(check8, checkErr8),
  createdAt: z11.number().refine(check8, checkErr8),
  updatedAt: z11.number().refine(check8, checkErr8)
});
var GroupePaginationBody = PaginationBody.extend({
  sort: GroupeSortBody.partial(),
  query: GroupeQueryBody.partial()
});
var GroupeBody = z11.object({
  name: MediaTitleBody
});
var GroupeCreateBody = PatchParamsBody.partial().extend({
  data: GroupeBody
});
var GroupeAddBody = z11.object({
  id: z11.optional(z11.string()),
  newGroupe: z11.optional(GroupeBody)
});
var GroupeDataToZOD = (data) => {
  if (!data) return;
  const toZOD = {
    name: data.name
  };
  const safeParse = GroupeBody.safeParse(toZOD);
  if (safeParse.success) return safeParse.data;
  return toZOD;
};

// src/_mangaZOD.ts
import { z as z12 } from "zod";
import {
  MangaFormatArray,
  MediaGenresArray,
  MediaParentLabelArray,
  MediaSourceArray,
  MediaStatusArray
} from "@actunime/types";
var MangaChapterVolumeBody = z12.object({
  airing: z12.number(),
  nextAiringDate: z12.optional(DateBody.partial()),
  total: z12.number()
});
var MangaQueryBody = z12.object({
  title: MediaTitleBody.partial(),
  date: MediaDateBody.partial(),
  format: z12.enum(MangaFormatArray),
  vf: z12.boolean(),
  genres: z12.array(z12.enum(MediaGenresArray)),
  status: z12.enum(MediaStatusArray),
  trailer: YoutubeURLStringBody,
  chapters: MangaChapterVolumeBody.partial(),
  volumes: MangaChapterVolumeBody.partial(),
  adult: z12.boolean(),
  explicit: z12.boolean(),
  links: MediaLinkBody.partial(),
  createdAt: z12.string(),
  updatedAt: z12.string()
});
var check9 = (v) => [-1, 1].includes(v);
var checkErr9 = "le sort doit \xEAtre soit -1 ou 1";
var MangaSortBody = z12.object({
  vf: z12.number().refine(check9, checkErr9),
  status: z12.number().refine(check9, checkErr9),
  adult: z12.number().refine(check9, checkErr9),
  date: MediaDateSortBody,
  explicit: z12.number().refine(check9, checkErr9),
  createdAt: z12.number().refine(check9, checkErr9),
  updatedAt: z12.number().refine(check9, checkErr9)
});
var MangaPaginationBody = PaginationBody.extend({
  sort: MangaSortBody.partial(),
  query: MangaQueryBody.partial()
});
var MangaAddBody = z12.object({
  id: z12.string(),
  parentLabel: z12.optional(z12.enum(MediaParentLabelArray))
});
var MangaBody = z12.object({
  groupe: GroupeAddBody,
  parent: z12.optional(MangaAddBody),
  source: z12.optional(z12.enum(MediaSourceArray)),
  title: MediaTitleBody,
  date: z12.optional(MediaDateBody.partial()),
  cover: z12.optional(ImageAddBody.partial()),
  banner: z12.optional(ImageAddBody.partial()),
  synopsis: z12.optional(z12.string()),
  format: z12.enum(MangaFormatArray),
  vf: z12.optional(zodBoolean()),
  genres: z12.optional(z12.array(z12.enum(MediaGenresArray))),
  // themes: z.optional(z.array(z.string())),
  status: z12.optional(z12.enum(MediaStatusArray)),
  trailer: z12.optional(YoutubeURLStringBody),
  chapters: z12.optional(MangaChapterVolumeBody.partial()),
  volumes: z12.optional(MangaChapterVolumeBody.partial()),
  adult: z12.optional(zodBoolean()),
  explicit: z12.optional(zodBoolean()),
  links: z12.optional(z12.array(MediaLinkBody)),
  companys: z12.optional(z12.array(CompanyAddBody)),
  staffs: z12.optional(z12.array(PersonAddBody)),
  characters: z12.optional(z12.array(CharacterAddBody))
}).strict();
var MangaCreateBody = PatchParamsBody.partial().extend({
  data: MangaBody
});
var MangaDataToZOD = (data) => {
  if (!data) return;
  const toZOD = {
    groupe: data.groupe,
    parent: data.parent,
    source: data.source,
    title: data.title,
    synopsis: data.synopsis,
    cover: data.cover,
    banner: data.banner,
    date: data.date,
    status: data.status,
    format: data.format,
    vf: data.vf,
    chapters: data.chapters,
    volumes: data.volumes,
    adult: data.adult,
    trailer: data.trailer,
    explicit: data.explicit,
    genres: data.genres,
    links: data.links,
    companys: data.companys,
    staffs: data.staffs,
    characters: data.characters
  };
  const safeParse = MangaBody.safeParse({ data: toZOD });
  if (safeParse.success) return safeParse.data;
  return toZOD;
};

// src/_trackZOD.ts
import { TrackTypeArray } from "@actunime/types";
import { z as z13 } from "zod";
var TrackQueryBody = z13.object({
  name: MediaTitleBody.partial(),
  type: z13.enum(TrackTypeArray),
  releaseDate: z13.optional(DateBody.partial()),
  artists: PersonBody.partial(),
  cover: ImageBody.partial(),
  links: MediaLinkBody.partial(),
  description: z13.string(),
  createdAt: z13.string(),
  updatedAt: z13.string()
});
var check10 = (v) => [-1, 1].includes(v);
var checkErr10 = "le sort doit \xEAtre soit -1 ou 1";
var TrackSortBody = z13.object({
  type: zodNumber().refine(check10, checkErr10),
  releaseDate: zodNumber().refine(check10, checkErr10),
  createdAt: zodNumber().refine(check10, checkErr10),
  updatedAt: zodNumber().refine(check10, checkErr10)
});
var TrackPaginationBody = PaginationBody.extend({
  sort: TrackSortBody.partial(),
  query: TrackQueryBody.partial(),
  from: FromBody
}).partial();
var Track_Pagination_ZOD = z13.object({
  page: z13.number(),
  limit: z13.number(),
  strict: z13.boolean(),
  sort: TrackSortBody.partial(),
  query: TrackQueryBody.partial()
});
var TrackBody = z13.object({
  name: MediaTitleBody,
  type: z13.enum(TrackTypeArray),
  releaseDate: z13.optional(DateBody.partial()),
  artists: z13.optional(z13.array(PersonAddBody)),
  cover: z13.optional(ImageAddBody),
  description: z13.optional(z13.string()),
  links: z13.optional(z13.array(MediaLinkBody))
}).strict();
var TrackCreateBody = PatchParamsBody.partial().extend({
  data: TrackBody
});
var TrackAddBody = z13.object({
  id: z13.optional(z13.string()),
  newTrack: z13.optional(TrackBody)
});
var TrackDataToZOD = (data) => {
  if (!data) return;
  const toZOD = {
    name: data.name,
    type: data.type,
    releaseDate: data.releaseDate,
    cover: data.cover,
    artists: data.artists,
    description: data.description,
    links: data.links
  };
  const safeParse = TrackBody.safeParse(toZOD);
  if (safeParse.success) return safeParse.data;
  return toZOD;
};

// src/_animeZOD.ts
import {
  AnimeFormatArray,
  MediaGenresArray as MediaGenresArray2,
  MediaParentLabelArray as MediaParentLabelArray2,
  MediaSourceArray as MediaSourceArray2,
  MediaStatusArray as MediaStatusArray2,
  MediaStatusObj
} from "@actunime/types";
var AnimeEpisodeBody = z14.object({
  airing: z14.number(),
  nextAiringDate: z14.optional(DateBody.partial()),
  total: z14.number(),
  durationMinutes: z14.number()
});
var AnimeQueryBody = z14.object({
  title: MediaTitleBody.partial(),
  date: MediaDateBody.partial(),
  format: z14.enum(AnimeFormatArray),
  vf: z14.boolean(),
  genres: z14.array(z14.enum(MediaGenresArray2)),
  status: z14.enum(MediaStatusArray2),
  trailer: YoutubeURLStringBody,
  episodes: AnimeEpisodeBody.partial(),
  adult: z14.boolean(),
  explicit: z14.boolean(),
  links: MediaLinkBody.partial(),
  createdAt: z14.string(),
  updatedAt: z14.string()
});
var check11 = (v) => [-1, 1].includes(v);
var checkErr11 = "le sort doit \xEAtre soit -1 ou 1";
var AnimeSortBody = z14.object({
  vf: z14.number().refine(check11, checkErr11),
  status: z14.number().refine(check11, checkErr11),
  adult: z14.number().refine(check11, checkErr11),
  date: MediaDateSortBody,
  explicit: z14.number().refine(check11, checkErr11),
  createdAt: z14.number().refine(check11, checkErr11),
  updatedAt: z14.number().refine(check11, checkErr11)
});
var AnimePaginationBody = PaginationBody.extend({
  sort: AnimeSortBody.partial(),
  query: AnimeQueryBody.partial()
});
var AnimeAddBody = z14.object({
  id: z14.string(),
  parentLabel: z14.optional(z14.enum(MediaParentLabelArray2))
});
var AnimeBody = z14.object({
  groupe: GroupeAddBody,
  parent: z14.optional(AnimeAddBody),
  manga: z14.optional(MangaAddBody),
  source: z14.optional(z14.enum(MediaSourceArray2)),
  title: MediaTitleBody,
  date: z14.optional(MediaDateBody.partial()),
  cover: z14.optional(ImageAddBody.partial()),
  banner: z14.optional(ImageAddBody.partial()),
  synopsis: z14.optional(z14.string()),
  format: z14.enum(AnimeFormatArray),
  vf: z14.optional(zodBoolean()),
  genres: z14.optional(z14.array(z14.enum(MediaGenresArray2))),
  // themes: z.optional(z.array(z.string())),
  status: z14.enum(MediaStatusArray2),
  trailer: z14.optional(YoutubeURLStringBody),
  episodes: z14.optional(AnimeEpisodeBody.partial()),
  adult: z14.optional(zodBoolean()),
  explicit: z14.optional(zodBoolean()),
  links: z14.optional(z14.array(MediaLinkBody)),
  companys: z14.optional(z14.array(CompanyAddBody)),
  staffs: z14.optional(z14.array(PersonAddBody)),
  characters: z14.optional(z14.array(CharacterAddBody)),
  tracks: z14.optional(z14.array(TrackAddBody))
}).strict().refine(
  (data) => {
    if (data.parent?.id) {
      if (!data.parent.parentLabel) {
        return false;
      }
    }
    const status = data.status;
    if (status) {
      if (["AIRING", "PAUSED"].includes(status)) {
        if (!data.date?.start) {
          return false;
        }
        if (!data.episodes?.airing) {
          return false;
        }
        if (!data.episodes?.nextAiringDate) {
          return false;
        }
      }
      if (["ENDED", "STOPPED"].includes(status)) {
        if (!data.episodes?.airing) {
          return false;
        }
        if (!data.episodes?.total) {
          return false;
        }
        if (!data.date?.start) {
          return false;
        }
        if (!data.date?.end) {
          return false;
        }
      }
      if (["POSTPONED"].includes(status)) {
        if (!data.date?.start) {
          return false;
        }
      }
    }
    return true;
  },
  (data) => {
    if (data.parent?.id) {
      if (!data.parent?.parentLabel) {
        return {
          message: "Ce champ est obligatoire si vous avez sp\xE9cifi\xE9 un parent.",
          path: ["parentLabel"]
        };
      }
    }
    const status = data.status;
    const message = `Le statut sp\xE9cifi\xE9 est: "${MediaStatusObj[status].label}", alors remplir ce champ est obligatoire !`;
    if (status) {
      if (["AIRING", "PAUSED"].includes(status)) {
        if (!data.date?.start) {
          return {
            message,
            path: ["date.start"]
          };
        }
        if (!data.episodes?.airing) {
          return {
            message,
            path: ["episodes.airing"]
          };
        }
        if (!data.episodes?.nextAiringDate) {
          return {
            message,
            path: ["episodes.nextAiringDate"]
          };
        }
      }
      if (["ENDED", "STOPPED"].includes(status)) {
        if (!data.episodes?.airing) {
          return {
            message,
            path: ["episodes.airing"]
          };
        }
        if (!data.episodes?.total) {
          return {
            message,
            path: ["episodes.total"]
          };
        }
        if (!data.date?.start) {
          return {
            message,
            path: ["date.start"]
          };
        }
        if (!data.date?.end) {
          return {
            message,
            path: ["date.end"]
          };
        }
      }
      if (["POSTPONED"].includes(status)) {
        if (!data.date?.start) {
          return {
            message,
            path: ["date.start"]
          };
        }
      }
    }
    return {
      message: "Nous avons un probl\xE8me.",
      path: ["CreateAnime"]
    };
  }
);
var AnimeCreateBody = PatchParamsBody.partial().extend({
  data: AnimeBody
});
var AnimeDataToZOD = (data) => {
  if (!data) return;
  const toZOD = {
    groupe: data.groupe,
    parent: data.parent,
    source: data.source,
    title: data.title,
    synopsis: data.synopsis,
    cover: data.cover,
    banner: data.banner,
    date: data.date,
    status: data.status,
    format: data.format,
    vf: data.vf,
    episodes: data.episodes,
    adult: data.adult,
    trailer: data.trailer,
    explicit: data.explicit,
    genres: data.genres,
    links: data.links,
    companys: data.companys,
    staffs: data.staffs,
    characters: data.characters,
    tracks: data.tracks
  };
  const safeParse = AnimeBody.safeParse({ data: toZOD });
  if (safeParse.success) return safeParse.data;
  return toZOD;
};

// src/_authValidationZOD.ts
import { z as z15 } from "zod";
var Auth_Validation_ZOD = z15.object({
  email: z15.string({ required_error: "Veuillez renseigner votre email" }).email({ message: "Email invalide" }),
  code: z15.string({ required_error: "Veuillez renseigner le code" })
});

// src/_connexionZOD.ts
import { z as z16 } from "zod";
var Connexion_Zod_Schema = z16.object({
  email: z16.string({ required_error: "Veuillez renseigner votre email" }).email({ message: "L'email est invalide" }),
  captcha: z16.string({ required_error: "Veuillez r\xE9soudre le captcha" })
});

// src/_getToZodByTargetPath.ts
var TargetPathToZod = {
  Groupe: GroupeDataToZOD,
  Manga: MangaDataToZOD,
  Anime: AnimeDataToZOD,
  Person: PersonDataToZOD,
  Character: CharacterDataToZOD,
  Track: TrackDataToZOD,
  Company: CompanyDataToZOD,
  ...{}
};
var TargetPathZodResolver = {
  Anime: AnimeBody,
  Manga: MangaBody,
  Character: CharacterBody,
  Person: PersonBody,
  Company: CompanyBody,
  Track: TrackBody,
  ...{}
};

// src/_inscriptionZOD.ts
import { z as z17 } from "zod";
var Inscription_Zod_Schema = z17.object({
  account: z17.object({
    email: z17.string({ required_error: "Veuillez renseigner votre email" }).email({ message: "L'email est invalide" }),
    password: z17.string({
      required_error: "Veuillez renseigner votre mot de passe"
    })
  }),
  user: z17.object({
    username: z17.string({ required_error: "Veuillez renseigner votre nom d'utilisateur" }).regex(/^[A-Za-z0-9_-]{2,21}$/gs, "Nom d'utilisateur invalide").min(2, "Le nom d'utilisateur doit contenir au moins 2 caract\xE8res").max(21, "Le nom d'utilisateur doit contenir au maximum 21 caract\xE8res").refine(
      (v) => !z17.string().url().safeParse(v).success,
      "Votre nom d'utilisateur ne doit pas contenir de lien"
    ),
    displayName: z17.string({ required_error: "Veuillez renseigner votre pseudonyme" }).min(2, "Le pseudonyme doit contenir au moins 2 caract\xE8res").max(32, "Le pseudonyme doit contenir au maximum 32 caract\xE8res").refine(
      (v) => !z17.string().url().safeParse(v).success,
      "Votre pseudonyme ne doit pas contenir de lien"
    ),
    description: z17.optional(
      z17.string().max(200, "Maximum de 200 caract\xE8res").refine(
        (v) => !z17.string().url().safeParse(v).success,
        "La biographie ne doit pas contenir de lien"
      )
    ),
    avatar: z17.optional(ImageAddBody),
    banner: z17.optional(ImageAddBody)
  }),
  captcha: z17.string({ required_error: "Veuillez r\xE9soudre le captcha" })
});

// src/_messageZOD.ts
import { z as z18 } from "zod";
var Create_Message_ZOD = z18.object({
  content: z18.string(),
  replyTo: z18.optional(z18.string())
});

// src/_reportZOD.ts
import {
  ReportStatusArray,
  ReportSubjectArray,
  TargetPathArray as TargetPathArray5
} from "@actunime/types";
import { z as z19 } from "zod";
var Report_Pagination_ZOD = z19.object({
  page: zodNumber(),
  limit: zodNumber(),
  strict: z19.boolean().optional(),
  sort: z19.object({
    updaptedAt: z19.enum(["DESC", "ASC"]).optional(),
    createdAt: z19.enum(["DESC", "ASC"]).optional()
  }).partial().strict(),
  query: z19.object({
    subject: z19.enum(ReportSubjectArray).optional(),
    status: z19.enum(ReportStatusArray).optional(),
    by: z19.string().optional(),
    author: z19.string().optional(),
    target: z19.string().optional(),
    targetPath: z19.enum(TargetPathArray5).optional()
  }).partial().strict(),
  with: z19.object({
    by: z19.boolean().optional(),
    author: z19.boolean().optional(),
    target: z19.boolean().optional()
  }).partial().strict()
}).partial().strict();
var Create_Report_ZOD = z19.object({
  status: z19.enum(ReportStatusArray)
}).strict();
var Create_Report_ZOD_FORM = z19.object({
  note: z19.string().optional(),
  data: Create_Report_ZOD
});
var Patch_Report_ZOD = z19.object({
  status: z19.enum(ReportStatusArray)
}).strict().partial();

// src/_updateZOD.ts
import {
  PatchStatusArray as PatchStatusArray2,
  PatchTypeArray as PatchTypeArray2,
  TargetPathArray as TargetPathArray6
} from "@actunime/types";
import { z as z20 } from "zod";
var Update_Pagination_ZOD = z20.object({
  page: zodNumber(),
  limit: zodNumber(),
  strict: z20.boolean().optional(),
  sort: z20.object({
    updaptedAt: z20.enum(["DESC", "ASC"]).optional(),
    createdAt: z20.enum(["DESC", "ASC"]).optional()
  }).partial().strict(),
  query: z20.object({
    target: z20.optional(z20.string()),
    targetPath: z20.optional(
      z20.union([z20.enum(TargetPathArray6), z20.array(z20.enum(TargetPathArray6))])
    ),
    author: z20.optional(z20.string()),
    status: z20.optional(
      z20.union([
        z20.array(z20.enum(PatchStatusArray2)),
        z20.enum(PatchStatusArray2)
      ])
    ),
    // actionLabel: z.optional(z.enum(PatchActionArray)),
    actionUser: z20.optional(z20.string()),
    type: z20.optional(
      z20.union([z20.enum(TargetPathArray6), z20.array(z20.enum(PatchTypeArray2))])
    ),
    ref: z20.optional(z20.string())
  }).partial().strict(),
  with: z20.object({
    author: z20.boolean().optional(),
    target: z20.boolean().optional(),
    actions: z20.boolean().optional(),
    ref: z20.boolean().optional()
  }).partial().strict()
}).partial().strict();
var Update_Action_ZOD = z20.object({
  // label: z.enum(PatchActionArray),
  note: z20.string(),
  changes: z20.any().optional()
});

// src/_userZOD.ts
import {
  UserRolesArray as UserRolesArray2,
  UserAnimeListStatusArray
} from "@actunime/types";
import { z as z21 } from "zod";
var UserQueryBody = z21.object({
  username: z21.string(),
  displayName: z21.string(),
  roles: z21.array(z21.enum(UserRolesArray2)),
  createdAt: z21.string(),
  updatedAt: z21.string()
});
var check12 = (v) => [-1, 1].includes(v);
var checkErr12 = "le sort doit \xEAtre soit -1 ou 1";
var UserSortBody = z21.object({
  username: zodNumber().refine(check12, checkErr12),
  displayName: zodNumber().refine(check12, checkErr12),
  roles: zodNumber().refine(check12, checkErr12),
  createdAt: zodNumber().refine(check12, checkErr12),
  updatedAt: zodNumber().refine(check12, checkErr12)
});
var UserPaginationBody = PaginationBody.extend({
  sort: UserSortBody.partial(),
  query: UserQueryBody.partial()
});
var UserOptions = z21.object({
  displayUnverified: z21.boolean()
});
var UserBody = z21.object({
  displayName: z21.string(),
  description: z21.optional(z21.string()),
  avatar: z21.optional(ImageAddBody),
  banner: z21.optional(ImageAddBody),
  options: z21.optional(UserOptions.partial())
});
var UserCreateBody = PatchParamsBody.partial().extend({
  data: UserBody
});
var UserClientBody = UserBody.extend({
  accountId: z21.string(),
  username: z21.string(),
  roles: z21.array(z21.string())
});
var UserClientCreateBody = PatchParamsBody.partial().extend({
  data: UserBody
});
var UserAddBody = z21.object({
  id: z21.string()
});
var UserDataToZOD = (data) => {
  if (!data) return {};
  const toZOD = {
    displayName: data.displayName,
    description: data.description,
    avatar: data.avatar,
    banner: data.banner,
    options: data.options
  };
  const safeParse = UserBody.safeParse(toZOD);
  if (safeParse.success) return safeParse.data;
  return toZOD;
};
var UserAnimeListe_ZOD = z21.object({
  id: z21.string(),
  episode: zodNumber().optional(),
  status: z21.enum(UserAnimeListStatusArray),
  score: zodNumber().optional(),
  note: z21.string().optional(),
  favoris: z21.boolean().optional(),
  rank: zodNumber().optional(),
  startedAt: z21.string().optional(),
  completedAt: z21.string().optional()
});

// src/_globalSearchZOD.ts
import { z as z22 } from "zod";
import { TargetPathArray as TargetPathArray7 } from "@actunime/types";
var GlobalSearchQueryBody = z22.object({
  search: z22.string(),
  path: z22.enum(TargetPathArray7)
});
var check13 = (v) => [-1, 1].includes(v);
var checkErr13 = "le sort doit \xEAtre soit -1 ou 1";
var GlobalSearchSortBody = z22.object({
  original: z22.number().refine(check13, checkErr13),
  normal: z22.number().refine(check13, checkErr13)
});
var GlobalSearchPaginationBody = PaginationBody.extend({
  sort: GlobalSearchSortBody.partial(),
  query: GlobalSearchQueryBody.partial()
});
var GlobalSearchBody = z22.object({
  search: z22.string(),
  path: z22.enum(TargetPathArray7)
});
export {
  AcceptChangesToPatch_ZOD,
  AccountDatabase_Pagination_ZOD,
  ActivityPaginationBody,
  ActivityQueryBody,
  ActivitySortBody,
  AddChangesToPatch_ZOD,
  AnimeAddBody,
  AnimeBody,
  AnimeCreateBody,
  AnimeDataToZOD,
  AnimePaginationBody,
  AnimeQueryBody,
  AnimeSortBody,
  Auth_Validation_ZOD,
  CharacterAddBody,
  CharacterBody,
  CharacterCreateBody,
  CharacterDataToZOD,
  CharacterPaginationBody,
  CharacterQueryBody,
  CharacterSortBody,
  CompanyAddBody,
  CompanyBody,
  CompanyCreateBody,
  CompanyDataToZOD,
  CompanyPaginationBody,
  CompanyQueryBody,
  CompanySortBody,
  Company_Pagination_ZOD,
  Connexion_Zod_Schema,
  Create_Message_ZOD,
  Create_Report_ZOD,
  Create_Report_ZOD_FORM,
  DateBody,
  DateSortBody,
  DeletePatch_ZOD,
  DenyChangesToPatch_ZOD,
  FromBody,
  GlobalSearchBody,
  GlobalSearchPaginationBody,
  GlobalSearchQueryBody,
  GlobalSearchSortBody,
  GroupeAddBody,
  GroupeBody,
  GroupeCreateBody,
  GroupeDataToZOD,
  GroupePaginationBody,
  GroupeQueryBody,
  GroupeSortBody,
  ImageAddBody,
  ImageBody,
  ImageCreateBody,
  ImageDataToZOD,
  ImagePaginationBody,
  ImageQueryBody,
  ImageSortBody,
  Inscription_Zod_Schema,
  MangaAddBody,
  MangaBody,
  MangaCreateBody,
  MangaDataToZOD,
  MangaPaginationBody,
  MangaQueryBody,
  MangaSortBody,
  MediaDateBody,
  MediaDateSortBody,
  MediaDeleteBody,
  MediaImageZodSchema,
  MediaLinkBody,
  MediaTitleBody,
  MediaVerifyBody,
  PaginationBody,
  PatchPaginationBody,
  PatchParamsBody,
  PatchQueryBody,
  PatchSortBody,
  Patch_Action_ZOD,
  Patch_Pagination_ZOD,
  Patch_Report_ZOD,
  PersonAddBody,
  PersonBody,
  PersonCreateBody,
  PersonDataToZOD,
  PersonPaginationBody,
  PersonQueryBody,
  PersonSortBody,
  Report_Pagination_ZOD,
  TargetPathToZod,
  TargetPathZodResolver,
  TrackAddBody,
  TrackBody,
  TrackCreateBody,
  TrackDataToZOD,
  TrackPaginationBody,
  TrackQueryBody,
  TrackSortBody,
  Track_Pagination_ZOD,
  Update_Action_ZOD,
  Update_Pagination_ZOD,
  UserAddBody,
  UserAnimeListe_ZOD,
  UserBody,
  UserClientBody,
  UserClientCreateBody,
  UserCreateBody,
  UserDataToZOD,
  UserDatabase_Pagination_ZOD,
  UserOptions,
  UserPaginationBody,
  UserQueryBody,
  UserSortBody,
  YoutubeURLStringBody,
  zodBoolean,
  zodDate,
  zodNumber
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2RhdGFiYXNlL19hY2NvdW50RGF0YWJhc2VaT0QudHMiLCAiLi4vc3JjL191dGlsLnRzIiwgIi4uL3NyYy9kYXRhYmFzZS9fdXNlckRhdGFiYXNlWk9ELnRzIiwgIi4uL3NyYy9fYWN0aXZpdHlaT0QudHMiLCAiLi4vc3JjL19hbmltZVpPRC50cyIsICIuLi9zcmMvX2NoYXJhY3RlclpPRC50cyIsICIuLi9zcmMvX3BlcnNvblpPRC50cyIsICIuLi9zcmMvX21lZGlhLnRzIiwgIi4uL3NyYy9faW1hZ2VaT0QudHMiLCAiLi4vc3JjL19wYXRjaFpPRC50cyIsICIuLi9zcmMvX2NvbXBhbnlaT0QudHMiLCAiLi4vc3JjL19ncm91cGVaT0QudHMiLCAiLi4vc3JjL19tYW5nYVpPRC50cyIsICIuLi9zcmMvX3RyYWNrWk9ELnRzIiwgIi4uL3NyYy9fYXV0aFZhbGlkYXRpb25aT0QudHMiLCAiLi4vc3JjL19jb25uZXhpb25aT0QudHMiLCAiLi4vc3JjL19nZXRUb1pvZEJ5VGFyZ2V0UGF0aC50cyIsICIuLi9zcmMvX2luc2NyaXB0aW9uWk9ELnRzIiwgIi4uL3NyYy9fbWVzc2FnZVpPRC50cyIsICIuLi9zcmMvX3JlcG9ydFpPRC50cyIsICIuLi9zcmMvX3VwZGF0ZVpPRC50cyIsICIuLi9zcmMvX3VzZXJaT0QudHMiLCAiLi4vc3JjL19nbG9iYWxTZWFyY2haT0QudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XHJcbmltcG9ydCB7IHpvZE51bWJlciB9IGZyb20gXCIuLi9fdXRpbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFjY291bnREYXRhYmFzZV9QYWdpbmF0aW9uX1pPRCA9IHpcclxuICAub2JqZWN0KHtcclxuICAgIHBhZ2U6IHpvZE51bWJlcigpLFxyXG4gICAgbGltaXQ6IHpvZE51bWJlcigpLFxyXG4gICAgcXVlcnk6IHpcclxuICAgICAgLm9iamVjdCh7XHJcbiAgICAgICAgaWQ6IHouc3RyaW5nKCksXHJcbiAgICAgIH0pXHJcbiAgICAgIC5wYXJ0aWFsKClcclxuICAgICAgLnN0cmljdCgpLFxyXG4gICAgc3RyaWN0OiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxyXG4gICAgc29ydDogei5vYmplY3Qoe1xyXG4gICAgICBjcmVhdGVkQXQ6IHouZW51bShbXCJERVNDXCIsIFwiQVNDXCJdKS5vcHRpb25hbCgpLFxyXG4gICAgICB1cGRhdGVkQXQ6IHouZW51bShbXCJERVNDXCIsIFwiQVNDXCJdKS5vcHRpb25hbCgpLFxyXG4gICAgfSksXHJcbiAgICB3aXRoOiB6XHJcbiAgICAgIC5vYmplY3Qoe30pXHJcbiAgICAgIC5wYXJ0aWFsKClcclxuICAgICAgLnN0cmljdCgpLFxyXG4gIH0pXHJcbiAgLnBhcnRpYWwoKVxyXG4gIC5zdHJpY3QoKTtcclxuXHJcbmV4cG9ydCB0eXBlIElBY2NvdW50RGF0YWJhc2VfUGFnaW5hdGlvbl9aT0QgPSB6LmluZmVyPHR5cGVvZiBBY2NvdW50RGF0YWJhc2VfUGFnaW5hdGlvbl9aT0Q+OyIsICJpbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHpvZEJvb2xlYW4gPSAoKSA9PlxyXG4gIHpcclxuICAgIC51bmlvbihbei5ib29sZWFuKCksIHoubGl0ZXJhbChcInRydWVcIiksIHoubGl0ZXJhbChcImZhbHNlXCIpXSlcclxuICAgIC50cmFuc2Zvcm0oKHZhbHVlKSA9PiB2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gXCJ0cnVlXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHpvZE51bWJlciA9ICgpID0+XHJcbiAgelxyXG4gICAgLnVuaW9uKFt6Lm51bWJlcigpLCB6LnN0cmluZygpXSlcclxuICAgIC50cmFuc2Zvcm0oKHZhbHVlKSA9PlxyXG4gICAgICB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgPyBwYXJzZUludCh2YWx1ZSkgOiB2YWx1ZSxcclxuICAgICk7XHJcblxyXG5leHBvcnQgY29uc3Qgem9kRGF0ZSA9ICgpID0+XHJcbiAgelxyXG4gICAgLnVuaW9uKFt6LmRhdGUoKSwgei5zdHJpbmcoKV0pXHJcbiAgICAudHJhbnNmb3JtKCh2YWx1ZSkgPT5cclxuICAgICAgdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiID8gbmV3IERhdGUodmFsdWUpIDogdmFsdWUsXHJcbiAgICApO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBQYWdpbmF0aW9uQm9keSA9IHoub2JqZWN0KHtcclxuICBwYWdlOiB6Lm51bWJlcigpLFxyXG4gIGxpbWl0OiB6Lm51bWJlcigpLFxyXG4gIHN0cmljdDogei5ib29sZWFuKCksXHJcbiAgb25seVZlcmlmaWVkOiB6LmJvb2xlYW4oKSxcclxuICBzb3J0OiB6LmFueSgpLFxyXG4gIHF1ZXJ5OiB6LmFueSgpLFxyXG59KVxyXG5cclxuZXhwb3J0IHR5cGUgSVBhZ2luYXRpb25Cb2R5ID0gei5pbmZlcjx0eXBlb2YgUGFnaW5hdGlvbkJvZHk+IiwgImltcG9ydCB7IFVzZXJSb2xlc0FycmF5IH0gZnJvbSBcIkBhY3R1bmltZS90eXBlc1wiO1xuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcbmltcG9ydCB7IHpvZE51bWJlciB9IGZyb20gXCIuLi9fdXRpbFwiO1xuXG5leHBvcnQgY29uc3QgVXNlckRhdGFiYXNlX1BhZ2luYXRpb25fWk9EID0gelxuICAub2JqZWN0KHtcbiAgICBwYWdlOiB6b2ROdW1iZXIoKSxcbiAgICBsaW1pdDogem9kTnVtYmVyKCksXG4gICAgcXVlcnk6IHpcbiAgICAgIC5vYmplY3Qoe1xuICAgICAgICBkaXNwbGF5TmFtZTogei5zdHJpbmcoKSxcbiAgICAgICAgdXNlcm5hbWU6IHouc3RyaW5nKCksXG4gICAgICAgIGlkOiB6LnN0cmluZygpLFxuICAgICAgICByb2xlczogei5hcnJheSh6LmVudW0oVXNlclJvbGVzQXJyYXkpKSxcbiAgICAgIH0pXG4gICAgICAucGFydGlhbCgpXG4gICAgICAuc3RyaWN0KCksXG4gICAgc3RyaWN0OiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICAgIHNvcnQ6IHoub2JqZWN0KHtcbiAgICAgIGNyZWF0ZWRBdDogei5lbnVtKFtcIkRFU0NcIiwgXCJBU0NcIl0pLm9wdGlvbmFsKCksXG4gICAgICB1cGRhdGVkQXQ6IHouZW51bShbXCJERVNDXCIsIFwiQVNDXCJdKS5vcHRpb25hbCgpLFxuICAgIH0pLFxuICAgIHdpdGg6IHpcbiAgICAgIC5vYmplY3Qoe30pXG4gICAgICAucGFydGlhbCgpXG4gICAgICAuc3RyaWN0KCksXG4gIH0pXG4gIC5wYXJ0aWFsKClcbiAgLnN0cmljdCgpO1xuXG5leHBvcnQgdHlwZSBJVXNlckRhdGFiYXNlX1BhZ2luYXRpb25fWk9EID0gei5pbmZlcjx0eXBlb2YgVXNlckRhdGFiYXNlX1BhZ2luYXRpb25fWk9EPjsiLCAiaW1wb3J0IHtcbiAgQWN0aXZpdHlBY3Rpb25BcnJheSxcbiAgQWN0aXZpdHlUeXBlQXJyYXksXG4gIFRhcmdldFBhdGhBcnJheSxcbn0gZnJvbSAnQGFjdHVuaW1lL3R5cGVzJztcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkJvZHkgfSBmcm9tICcuL191dGlsJztcbmltcG9ydCB7fSBmcm9tICcuL19tZWRpYSc7XG5cbmV4cG9ydCBjb25zdCBBY3Rpdml0eVF1ZXJ5Qm9keSA9IHoub2JqZWN0KHtcbiAgdHlwZTogei5lbnVtKEFjdGl2aXR5VHlwZUFycmF5KSxcbiAgYWN0aW9uOiB6LmVudW0oQWN0aXZpdHlBY3Rpb25BcnJheSksXG4gIGF1dGhvcjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICB0YXJnZXRzOiB6LmFycmF5KHoub2JqZWN0KHsgcGF0aDogei5lbnVtKFRhcmdldFBhdGhBcnJheSksIGlkOiB6LnN0cmluZygpIH0pKSxcbiAgY3JlYXRlZEF0OiB6LnN0cmluZygpLFxuICB1cGRhdGVkQXQ6IHouc3RyaW5nKCksXG59KTtcblxuZXhwb3J0IHR5cGUgSUFjdGl2aXR5UXVlcnlCb2R5ID0gei5pbmZlcjx0eXBlb2YgQWN0aXZpdHlRdWVyeUJvZHk+O1xuXG5jb25zdCBjaGVjayA9ICh2OiBudW1iZXIpID0+IFstMSwgMV0uaW5jbHVkZXModik7XG5jb25zdCBjaGVja0VyciA9ICdsZSBzb3J0IGRvaXQgXHUwMEVBdHJlIHNvaXQgLTEgb3UgMSc7XG5leHBvcnQgY29uc3QgQWN0aXZpdHlTb3J0Qm9keSA9IHoub2JqZWN0KHtcbiAgdHlwZTogei5udW1iZXIoKS5yZWZpbmUoY2hlY2ssIGNoZWNrRXJyKSxcbiAgYWN0aW9uOiB6Lm51bWJlcigpLnJlZmluZShjaGVjaywgY2hlY2tFcnIpLFxuICBjcmVhdGVkQXQ6IHoubnVtYmVyKCkucmVmaW5lKGNoZWNrLCBjaGVja0VyciksXG4gIHVwZGF0ZWRBdDogei5udW1iZXIoKS5yZWZpbmUoY2hlY2ssIGNoZWNrRXJyKSxcbn0pO1xuXG5leHBvcnQgdHlwZSBJQWN0aXZpdHlTb3J0Qm9keSA9IHouaW5mZXI8dHlwZW9mIEFjdGl2aXR5U29ydEJvZHk+O1xuXG5leHBvcnQgY29uc3QgQWN0aXZpdHlQYWdpbmF0aW9uQm9keSA9IFBhZ2luYXRpb25Cb2R5LmV4dGVuZCh7XG4gIHNvcnQ6IEFjdGl2aXR5U29ydEJvZHkucGFydGlhbCgpLFxuICBxdWVyeTogQWN0aXZpdHlRdWVyeUJvZHkucGFydGlhbCgpLFxufSk7XG5cbmV4cG9ydCB0eXBlIElBY3Rpdml0eVBhZ2luYXRpb25Cb2R5ID0gei5pbmZlcjx0eXBlb2YgQWN0aXZpdHlQYWdpbmF0aW9uQm9keT47XG4iLCAiaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XHJcbmltcG9ydCB7IENoYXJhY3RlckFkZEJvZHkgfSBmcm9tICcuL19jaGFyYWN0ZXJaT0QnO1xyXG5pbXBvcnQgeyBDb21wYW55QWRkQm9keSB9IGZyb20gJy4vX2NvbXBhbnlaT0QnO1xyXG5pbXBvcnQgeyBHcm91cGVBZGRCb2R5IH0gZnJvbSAnLi9fZ3JvdXBlWk9EJztcclxuaW1wb3J0IHsgTWFuZ2FBZGRCb2R5IH0gZnJvbSAnLi9fbWFuZ2FaT0QnO1xyXG5pbXBvcnQge1xyXG4gIERhdGVCb2R5LFxyXG4gIE1lZGlhRGF0ZUJvZHksXHJcbiAgTWVkaWFEYXRlU29ydEJvZHksXHJcbiAgTWVkaWFMaW5rQm9keSxcclxuICBNZWRpYVRpdGxlQm9keSxcclxuICBZb3V0dWJlVVJMU3RyaW5nQm9keSxcclxufSBmcm9tICcuL19tZWRpYSc7XHJcbmltcG9ydCB7IFBlcnNvbkFkZEJvZHkgfSBmcm9tICcuL19wZXJzb25aT0QnO1xyXG5pbXBvcnQgeyBUcmFja0FkZEJvZHkgfSBmcm9tICcuL190cmFja1pPRCc7XHJcbmltcG9ydCB7IFBhZ2luYXRpb25Cb2R5LCB6b2RCb29sZWFuIH0gZnJvbSAnLi9fdXRpbCc7XHJcbmltcG9ydCB7IEltYWdlQWRkQm9keSB9IGZyb20gJy4vX2ltYWdlWk9EJztcclxuaW1wb3J0IHsgUGF0Y2hQYXJhbXNCb2R5IH0gZnJvbSAnLi9fcGF0Y2haT0QnO1xyXG5pbXBvcnQge1xyXG4gIEFuaW1lRm9ybWF0QXJyYXksXHJcbiAgSUFuaW1lLFxyXG4gIE1lZGlhR2VucmVzQXJyYXksXHJcbiAgTWVkaWFQYXJlbnRMYWJlbEFycmF5LFxyXG4gIE1lZGlhU291cmNlQXJyYXksXHJcbiAgTWVkaWFTdGF0dXNBcnJheSxcclxuICBNZWRpYVN0YXR1c09iaixcclxufSBmcm9tICdAYWN0dW5pbWUvdHlwZXMnO1xyXG5cclxuY29uc3QgQW5pbWVFcGlzb2RlQm9keSA9IHoub2JqZWN0KHtcclxuICBhaXJpbmc6IHoubnVtYmVyKCksXHJcbiAgbmV4dEFpcmluZ0RhdGU6IHoub3B0aW9uYWwoRGF0ZUJvZHkucGFydGlhbCgpKSxcclxuICB0b3RhbDogei5udW1iZXIoKSxcclxuICBkdXJhdGlvbk1pbnV0ZXM6IHoubnVtYmVyKCksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFuaW1lUXVlcnlCb2R5ID0gei5vYmplY3Qoe1xyXG4gIHRpdGxlOiBNZWRpYVRpdGxlQm9keS5wYXJ0aWFsKCksXHJcbiAgZGF0ZTogTWVkaWFEYXRlQm9keS5wYXJ0aWFsKCksXHJcbiAgZm9ybWF0OiB6LmVudW0oQW5pbWVGb3JtYXRBcnJheSksXHJcbiAgdmY6IHouYm9vbGVhbigpLFxyXG4gIGdlbnJlczogei5hcnJheSh6LmVudW0oTWVkaWFHZW5yZXNBcnJheSkpLFxyXG4gIHN0YXR1czogei5lbnVtKE1lZGlhU3RhdHVzQXJyYXkpLFxyXG4gIHRyYWlsZXI6IFlvdXR1YmVVUkxTdHJpbmdCb2R5LFxyXG4gIGVwaXNvZGVzOiBBbmltZUVwaXNvZGVCb2R5LnBhcnRpYWwoKSxcclxuICBhZHVsdDogei5ib29sZWFuKCksXHJcbiAgZXhwbGljaXQ6IHouYm9vbGVhbigpLFxyXG4gIGxpbmtzOiBNZWRpYUxpbmtCb2R5LnBhcnRpYWwoKSxcclxuICBjcmVhdGVkQXQ6IHouc3RyaW5nKCksXHJcbiAgdXBkYXRlZEF0OiB6LnN0cmluZygpLFxyXG59KTtcclxuXHJcbmV4cG9ydCB0eXBlIElBbmltZVF1ZXJ5Qm9keSA9IHouaW5mZXI8dHlwZW9mIEFuaW1lUXVlcnlCb2R5PjtcclxuXHJcbmNvbnN0IGNoZWNrID0gKHY6IG51bWJlcikgPT4gWy0xLCAxXS5pbmNsdWRlcyh2KTtcclxuY29uc3QgY2hlY2tFcnIgPSAnbGUgc29ydCBkb2l0IFx1MDBFQXRyZSBzb2l0IC0xIG91IDEnO1xyXG5leHBvcnQgY29uc3QgQW5pbWVTb3J0Qm9keSA9IHoub2JqZWN0KHtcclxuICB2Zjogei5udW1iZXIoKS5yZWZpbmUoY2hlY2ssIGNoZWNrRXJyKSxcclxuICBzdGF0dXM6IHoubnVtYmVyKCkucmVmaW5lKGNoZWNrLCBjaGVja0VyciksXHJcbiAgYWR1bHQ6IHoubnVtYmVyKCkucmVmaW5lKGNoZWNrLCBjaGVja0VyciksXHJcbiAgZGF0ZTogTWVkaWFEYXRlU29ydEJvZHksXHJcbiAgZXhwbGljaXQ6IHoubnVtYmVyKCkucmVmaW5lKGNoZWNrLCBjaGVja0VyciksXHJcbiAgY3JlYXRlZEF0OiB6Lm51bWJlcigpLnJlZmluZShjaGVjaywgY2hlY2tFcnIpLFxyXG4gIHVwZGF0ZWRBdDogei5udW1iZXIoKS5yZWZpbmUoY2hlY2ssIGNoZWNrRXJyKSxcclxufSk7XHJcblxyXG5leHBvcnQgdHlwZSBJQW5pbWVTb3J0Qm9keSA9IHouaW5mZXI8dHlwZW9mIEFuaW1lU29ydEJvZHk+O1xyXG5cclxuZXhwb3J0IGNvbnN0IEFuaW1lUGFnaW5hdGlvbkJvZHkgPSBQYWdpbmF0aW9uQm9keS5leHRlbmQoe1xyXG4gIHNvcnQ6IEFuaW1lU29ydEJvZHkucGFydGlhbCgpLFxyXG4gIHF1ZXJ5OiBBbmltZVF1ZXJ5Qm9keS5wYXJ0aWFsKCksXHJcbn0pO1xyXG5cclxuZXhwb3J0IHR5cGUgSUFuaW1lUGFnaW5hdGlvbkJvZHkgPSB6LmluZmVyPHR5cGVvZiBBbmltZVBhZ2luYXRpb25Cb2R5PjtcclxuXHJcbmV4cG9ydCBjb25zdCBBbmltZUFkZEJvZHkgPSB6Lm9iamVjdCh7XHJcbiAgaWQ6IHouc3RyaW5nKCksXHJcbiAgcGFyZW50TGFiZWw6IHoub3B0aW9uYWwoei5lbnVtKE1lZGlhUGFyZW50TGFiZWxBcnJheSkpLFxyXG59KTtcclxuXHJcbmV4cG9ydCB0eXBlIElBbmltZUFkZEJvZHkgPSB6LmluZmVyPHR5cGVvZiBBbmltZUFkZEJvZHk+O1xyXG5cclxuZXhwb3J0IGNvbnN0IEFuaW1lQm9keSA9IHpcclxuICAub2JqZWN0KHtcclxuICAgIGdyb3VwZTogR3JvdXBlQWRkQm9keSxcclxuICAgIHBhcmVudDogei5vcHRpb25hbChBbmltZUFkZEJvZHkpLFxyXG4gICAgbWFuZ2E6IHoub3B0aW9uYWwoTWFuZ2FBZGRCb2R5KSxcclxuICAgIHNvdXJjZTogei5vcHRpb25hbCh6LmVudW0oTWVkaWFTb3VyY2VBcnJheSkpLFxyXG4gICAgdGl0bGU6IE1lZGlhVGl0bGVCb2R5LFxyXG4gICAgZGF0ZTogei5vcHRpb25hbChNZWRpYURhdGVCb2R5LnBhcnRpYWwoKSksXHJcbiAgICBjb3Zlcjogei5vcHRpb25hbChJbWFnZUFkZEJvZHkucGFydGlhbCgpKSxcclxuICAgIGJhbm5lcjogei5vcHRpb25hbChJbWFnZUFkZEJvZHkucGFydGlhbCgpKSxcclxuICAgIHN5bm9wc2lzOiB6Lm9wdGlvbmFsKHouc3RyaW5nKCkpLFxyXG4gICAgZm9ybWF0OiB6LmVudW0oQW5pbWVGb3JtYXRBcnJheSksXHJcbiAgICB2Zjogei5vcHRpb25hbCh6b2RCb29sZWFuKCkpLFxyXG4gICAgZ2VucmVzOiB6Lm9wdGlvbmFsKHouYXJyYXkoei5lbnVtKE1lZGlhR2VucmVzQXJyYXkpKSksXHJcbiAgICAvLyB0aGVtZXM6IHoub3B0aW9uYWwoei5hcnJheSh6LnN0cmluZygpKSksXHJcbiAgICBzdGF0dXM6IHouZW51bShNZWRpYVN0YXR1c0FycmF5KSxcclxuICAgIHRyYWlsZXI6IHoub3B0aW9uYWwoWW91dHViZVVSTFN0cmluZ0JvZHkpLFxyXG4gICAgZXBpc29kZXM6IHoub3B0aW9uYWwoQW5pbWVFcGlzb2RlQm9keS5wYXJ0aWFsKCkpLFxyXG4gICAgYWR1bHQ6IHoub3B0aW9uYWwoem9kQm9vbGVhbigpKSxcclxuICAgIGV4cGxpY2l0OiB6Lm9wdGlvbmFsKHpvZEJvb2xlYW4oKSksXHJcbiAgICBsaW5rczogei5vcHRpb25hbCh6LmFycmF5KE1lZGlhTGlua0JvZHkpKSxcclxuICAgIGNvbXBhbnlzOiB6Lm9wdGlvbmFsKHouYXJyYXkoQ29tcGFueUFkZEJvZHkpKSxcclxuICAgIHN0YWZmczogei5vcHRpb25hbCh6LmFycmF5KFBlcnNvbkFkZEJvZHkpKSxcclxuICAgIGNoYXJhY3RlcnM6IHoub3B0aW9uYWwoei5hcnJheShDaGFyYWN0ZXJBZGRCb2R5KSksXHJcbiAgICB0cmFja3M6IHoub3B0aW9uYWwoei5hcnJheShUcmFja0FkZEJvZHkpKSxcclxuICB9KVxyXG4gIC5zdHJpY3QoKVxyXG4gIC5yZWZpbmUoXHJcbiAgICAoZGF0YSkgPT4ge1xyXG4gICAgICBpZiAoZGF0YS5wYXJlbnQ/LmlkKSB7XHJcbiAgICAgICAgaWYgKCFkYXRhLnBhcmVudC5wYXJlbnRMYWJlbCkge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zdCBzdGF0dXMgPSBkYXRhLnN0YXR1cztcclxuXHJcbiAgICAgIGlmIChzdGF0dXMpIHtcclxuICAgICAgICBpZiAoWydBSVJJTkcnLCAnUEFVU0VEJ10uaW5jbHVkZXMoc3RhdHVzKSkge1xyXG4gICAgICAgICAgaWYgKCFkYXRhLmRhdGU/LnN0YXJ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICghZGF0YS5lcGlzb2Rlcz8uYWlyaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICghZGF0YS5lcGlzb2Rlcz8ubmV4dEFpcmluZ0RhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKFsnRU5ERUQnLCAnU1RPUFBFRCddLmluY2x1ZGVzKHN0YXR1cykpIHtcclxuICAgICAgICAgIGlmICghZGF0YS5lcGlzb2Rlcz8uYWlyaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICghZGF0YS5lcGlzb2Rlcz8udG90YWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKCFkYXRhLmRhdGU/LnN0YXJ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICghZGF0YS5kYXRlPy5lbmQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKFsnUE9TVFBPTkVEJ10uaW5jbHVkZXMoc3RhdHVzKSkge1xyXG4gICAgICAgICAgaWYgKCFkYXRhLmRhdGU/LnN0YXJ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG4gICAgKGRhdGEpID0+IHtcclxuICAgICAgaWYgKGRhdGEucGFyZW50Py5pZCkge1xyXG4gICAgICAgIGlmICghZGF0YS5wYXJlbnQ/LnBhcmVudExhYmVsKSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBtZXNzYWdlOlxyXG4gICAgICAgICAgICAgICdDZSBjaGFtcCBlc3Qgb2JsaWdhdG9pcmUgc2kgdm91cyBhdmV6IHNwXHUwMEU5Y2lmaVx1MDBFOSB1biBwYXJlbnQuJyxcclxuICAgICAgICAgICAgcGF0aDogWydwYXJlbnRMYWJlbCddLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc3RhdHVzID0gZGF0YS5zdGF0dXM7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgTGUgc3RhdHV0IHNwXHUwMEU5Y2lmaVx1MDBFOSBlc3Q6IFwiJHtNZWRpYVN0YXR1c09ialtzdGF0dXNdLmxhYmVsfVwiLCBhbG9ycyByZW1wbGlyIGNlIGNoYW1wIGVzdCBvYmxpZ2F0b2lyZSAhYDtcclxuXHJcbiAgICAgIGlmIChzdGF0dXMpIHtcclxuICAgICAgICBpZiAoWydBSVJJTkcnLCAnUEFVU0VEJ10uaW5jbHVkZXMoc3RhdHVzKSkge1xyXG4gICAgICAgICAgaWYgKCFkYXRhLmRhdGU/LnN0YXJ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZSxcclxuICAgICAgICAgICAgICBwYXRoOiBbJ2RhdGUuc3RhcnQnXSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICghZGF0YS5lcGlzb2Rlcz8uYWlyaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZSxcclxuICAgICAgICAgICAgICBwYXRoOiBbJ2VwaXNvZGVzLmFpcmluZyddLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKCFkYXRhLmVwaXNvZGVzPy5uZXh0QWlyaW5nRGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgcGF0aDogWydlcGlzb2Rlcy5uZXh0QWlyaW5nRGF0ZSddLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKFsnRU5ERUQnLCAnU1RPUFBFRCddLmluY2x1ZGVzKHN0YXR1cykpIHtcclxuICAgICAgICAgIGlmICghZGF0YS5lcGlzb2Rlcz8uYWlyaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZSxcclxuICAgICAgICAgICAgICBwYXRoOiBbJ2VwaXNvZGVzLmFpcmluZyddLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKCFkYXRhLmVwaXNvZGVzPy50b3RhbCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgcGF0aDogWydlcGlzb2Rlcy50b3RhbCddLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKCFkYXRhLmRhdGU/LnN0YXJ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZSxcclxuICAgICAgICAgICAgICBwYXRoOiBbJ2RhdGUuc3RhcnQnXSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICghZGF0YS5kYXRlPy5lbmQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgIHBhdGg6IFsnZGF0ZS5lbmQnXSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChbJ1BPU1RQT05FRCddLmluY2x1ZGVzKHN0YXR1cykpIHtcclxuICAgICAgICAgIGlmICghZGF0YS5kYXRlPy5zdGFydCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgcGF0aDogWydkYXRlLnN0YXJ0J10sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG1lc3NhZ2U6ICdOb3VzIGF2b25zIHVuIHByb2JsXHUwMEU4bWUuJyxcclxuICAgICAgICBwYXRoOiBbJ0NyZWF0ZUFuaW1lJ10sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbmV4cG9ydCB0eXBlIElBbmltZUJvZHkgPSB6LmluZmVyPHR5cGVvZiBBbmltZUJvZHk+O1xyXG5cclxuZXhwb3J0IGNvbnN0IEFuaW1lQ3JlYXRlQm9keSA9IFBhdGNoUGFyYW1zQm9keS5wYXJ0aWFsKCkuZXh0ZW5kKHtcclxuICBkYXRhOiBBbmltZUJvZHksXHJcbn0pO1xyXG5cclxuZXhwb3J0IHR5cGUgSUFuaW1lQ3JlYXRlQm9keSA9IHouaW5mZXI8dHlwZW9mIEFuaW1lQ3JlYXRlQm9keT47XHJcblxyXG5leHBvcnQgY29uc3QgQW5pbWVEYXRhVG9aT0QgPSAoZGF0YTogSUFuaW1lKSA9PiB7XHJcbiAgaWYgKCFkYXRhKSByZXR1cm47XHJcblxyXG4gIGNvbnN0IHRvWk9EOiBJQW5pbWVCb2R5ID0ge1xyXG4gICAgZ3JvdXBlOiBkYXRhLmdyb3VwZSxcclxuICAgIHBhcmVudDogZGF0YS5wYXJlbnQsXHJcbiAgICBzb3VyY2U6IGRhdGEuc291cmNlLFxyXG4gICAgdGl0bGU6IGRhdGEudGl0bGUsXHJcbiAgICBzeW5vcHNpczogZGF0YS5zeW5vcHNpcyxcclxuICAgIGNvdmVyOiBkYXRhLmNvdmVyLFxyXG4gICAgYmFubmVyOiBkYXRhLmJhbm5lcixcclxuICAgIGRhdGU6IGRhdGEuZGF0ZSxcclxuICAgIHN0YXR1czogZGF0YS5zdGF0dXMsXHJcbiAgICBmb3JtYXQ6IGRhdGEuZm9ybWF0LFxyXG4gICAgdmY6IGRhdGEudmYsXHJcbiAgICBlcGlzb2RlczogZGF0YS5lcGlzb2RlcyxcclxuICAgIGFkdWx0OiBkYXRhLmFkdWx0LFxyXG4gICAgdHJhaWxlcjogZGF0YS50cmFpbGVyLFxyXG4gICAgZXhwbGljaXQ6IGRhdGEuZXhwbGljaXQsXHJcbiAgICBnZW5yZXM6IGRhdGEuZ2VucmVzLFxyXG4gICAgbGlua3M6IGRhdGEubGlua3MsXHJcbiAgICBjb21wYW55czogZGF0YS5jb21wYW55cyxcclxuICAgIHN0YWZmczogZGF0YS5zdGFmZnMsXHJcbiAgICBjaGFyYWN0ZXJzOiBkYXRhLmNoYXJhY3RlcnMsXHJcbiAgICB0cmFja3M6IGRhdGEudHJhY2tzLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNhZmVQYXJzZSA9IEFuaW1lQm9keS5zYWZlUGFyc2UoeyBkYXRhOiB0b1pPRCB9KTtcclxuXHJcbiAgaWYgKHNhZmVQYXJzZS5zdWNjZXNzKSByZXR1cm4gc2FmZVBhcnNlLmRhdGE7XHJcblxyXG4gIHJldHVybiB0b1pPRDtcclxufTtcclxuIiwgImltcG9ydCB7XHJcbiAgQ2hhcmFjdGVyR2VuZGVyQXJyYXksXHJcbiAgQ2hhcmFjdGVyUm9sZUFycmF5LFxyXG4gIENoYXJhY3RlclNwZWNpZXNBcnJheSxcclxuICBJQ2hhcmFjdGVyLFxyXG59IGZyb20gJ0BhY3R1bmltZS90eXBlcyc7XHJcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xyXG5pbXBvcnQgeyBQZXJzb25BZGRCb2R5LCBQZXJzb25Cb2R5IH0gZnJvbSAnLi9fcGVyc29uWk9EJztcclxuaW1wb3J0IHsgUGFnaW5hdGlvbkJvZHksIHpvZE51bWJlciB9IGZyb20gJy4vX3V0aWwnO1xyXG5pbXBvcnQgeyBJbWFnZUFkZEJvZHksIEltYWdlQm9keSB9IGZyb20gJy4vX2ltYWdlWk9EJztcclxuaW1wb3J0IHsgUGF0Y2hQYXJhbXNCb2R5IH0gZnJvbSAnLi9fcGF0Y2haT0QnO1xyXG5pbXBvcnQgeyBEYXRlQm9keSwgRnJvbUJvZHksIE1lZGlhVGl0bGVCb2R5IH0gZnJvbSAnLi9fbWVkaWEnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENoYXJhY3RlclF1ZXJ5Qm9keSA9IHoub2JqZWN0KHtcclxuICBuYW1lOiBNZWRpYVRpdGxlQm9keS5wYXJ0aWFsKCksXHJcbiAgYWdlOiB6b2ROdW1iZXIoKSxcclxuICBiaXJ0aERhdGU6IHoub3B0aW9uYWwoRGF0ZUJvZHkucGFydGlhbCgpKSxcclxuICBhdmF0YXI6IEltYWdlQm9keS5wYXJ0aWFsKCksXHJcbiAgZ2VuZGVyOiB6LmVudW0oQ2hhcmFjdGVyR2VuZGVyQXJyYXkpLFxyXG4gIHNwZWNpZXM6IHouZW51bShDaGFyYWN0ZXJTcGVjaWVzQXJyYXkpLFxyXG4gIGFjdG9yczogUGVyc29uQm9keS5wYXJ0aWFsKCksXHJcbiAgY3JlYXRlZEF0OiB6LnN0cmluZygpLFxyXG4gIHVwZGF0ZWRBdDogei5zdHJpbmcoKSxcclxufSk7XHJcblxyXG5jb25zdCBjaGVjayA9ICh2OiBudW1iZXIpID0+IFstMSwgMV0uaW5jbHVkZXModik7XHJcbmNvbnN0IGNoZWNrRXJyID0gJ2xlIHNvcnQgZG9pdCBcdTAwRUF0cmUgc29pdCAtMSBvdSAxJztcclxuZXhwb3J0IGNvbnN0IENoYXJhY3RlclNvcnRCb2R5ID0gei5vYmplY3Qoe1xyXG4gIGFnZTogem9kTnVtYmVyKCkucmVmaW5lKGNoZWNrLCBjaGVja0VyciksXHJcbiAgYmlydGhEYXRlOiB6b2ROdW1iZXIoKS5yZWZpbmUoY2hlY2ssIGNoZWNrRXJyKSxcclxuICBnZW5kZXI6IHpvZE51bWJlcigpLnJlZmluZShjaGVjaywgY2hlY2tFcnIpLFxyXG4gIHNwZWNpZXM6IHpvZE51bWJlcigpLnJlZmluZShjaGVjaywgY2hlY2tFcnIpLFxyXG4gIGNyZWF0ZWRBdDogem9kTnVtYmVyKCkucmVmaW5lKGNoZWNrLCBjaGVja0VyciksXHJcbiAgdXBkYXRlZEF0OiB6b2ROdW1iZXIoKS5yZWZpbmUoY2hlY2ssIGNoZWNrRXJyKSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgQ2hhcmFjdGVyUGFnaW5hdGlvbkJvZHkgPSBQYWdpbmF0aW9uQm9keS5leHRlbmQoe1xyXG4gIHNvcnQ6IENoYXJhY3RlclNvcnRCb2R5LnBhcnRpYWwoKSxcclxuICBxdWVyeTogQ2hhcmFjdGVyUXVlcnlCb2R5LnBhcnRpYWwoKSxcclxuICBmcm9tOiBGcm9tQm9keSxcclxufSkucGFydGlhbCgpO1xyXG5cclxuZXhwb3J0IHR5cGUgSUNoYXJhY3RlclBhZ2luYXRpb25Cb2R5ID0gei5pbmZlcjx0eXBlb2YgQ2hhcmFjdGVyUGFnaW5hdGlvbkJvZHk+O1xyXG5cclxuZXhwb3J0IGNvbnN0IENoYXJhY3RlckJvZHkgPSB6Lm9iamVjdCh7XHJcbiAgbmFtZTogTWVkaWFUaXRsZUJvZHksXHJcbiAgYWdlOiB6Lm9wdGlvbmFsKHpvZE51bWJlcigpKSxcclxuICBiaXJ0aERhdGU6IHoub3B0aW9uYWwoRGF0ZUJvZHkucGFydGlhbCgpKSxcclxuICBnZW5kZXI6IHoub3B0aW9uYWwoei5lbnVtKENoYXJhY3RlckdlbmRlckFycmF5KSksXHJcbiAgc3BlY2llczogei5vcHRpb25hbCh6LmVudW0oQ2hhcmFjdGVyU3BlY2llc0FycmF5KSksXHJcbiAgZGVzY3JpcHRpb246IHoub3B0aW9uYWwoei5zdHJpbmcoKSksXHJcbiAgYXZhdGFyOiB6Lm9wdGlvbmFsKEltYWdlQWRkQm9keSksXHJcbiAgYWN0b3JzOiB6Lm9wdGlvbmFsKHouYXJyYXkoUGVyc29uQWRkQm9keS5vbWl0KHsgcm9sZTogdHJ1ZSB9KSkpLFxyXG59KTtcclxuXHJcbmV4cG9ydCB0eXBlIElDaGFyYWN0ZXJCb2R5ID0gei5pbmZlcjx0eXBlb2YgQ2hhcmFjdGVyQm9keT47XHJcblxyXG5leHBvcnQgY29uc3QgQ2hhcmFjdGVyQ3JlYXRlQm9keSA9IFBhdGNoUGFyYW1zQm9keS5wYXJ0aWFsKCkuZXh0ZW5kKHtcclxuICBkYXRhOiBDaGFyYWN0ZXJCb2R5LFxyXG59KTtcclxuXHJcbmV4cG9ydCB0eXBlIElDaGFyYWN0ZXJDcmVhdGVCb2R5ID0gei5pbmZlcjx0eXBlb2YgQ2hhcmFjdGVyQ3JlYXRlQm9keT47XHJcblxyXG5leHBvcnQgY29uc3QgQ2hhcmFjdGVyQWRkQm9keSA9IHoub2JqZWN0KHtcclxuICBpZDogei5vcHRpb25hbCh6LnN0cmluZygpKSxcclxuICBuZXdDaGFyYWN0ZXI6IHoub3B0aW9uYWwoQ2hhcmFjdGVyQm9keSksXHJcbiAgcm9sZTogei5vcHRpb25hbChcclxuICAgIHouZW51bShDaGFyYWN0ZXJSb2xlQXJyYXksIHsgcmVxdWlyZWRfZXJyb3I6ICdMZSByb2xlIGVzdCByZXF1aXMnIH0pXHJcbiAgKSxcclxufSk7XHJcblxyXG5leHBvcnQgdHlwZSBJQ2hhcmFjdGVyQWRkQm9keSA9IHouaW5mZXI8dHlwZW9mIENoYXJhY3RlckFkZEJvZHk+O1xyXG5cclxuZXhwb3J0IGNvbnN0IENoYXJhY3RlckRhdGFUb1pPRCA9IChkYXRhOiBJQ2hhcmFjdGVyKSA9PiB7XHJcbiAgaWYgKCFkYXRhKSByZXR1cm47XHJcblxyXG4gIGNvbnN0IHRvWk9EOiBJQ2hhcmFjdGVyQm9keSA9IHtcclxuICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgIGFnZTogZGF0YS5hZ2UsXHJcbiAgICBiaXJ0aERhdGU6IGRhdGEuYmlydGhEYXRlLFxyXG4gICAgZ2VuZGVyOiBkYXRhLmdlbmRlcixcclxuICAgIHNwZWNpZXM6IGRhdGEuc3BlY2llcyxcclxuICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgYXZhdGFyOiBkYXRhLmF2YXRhcixcclxuICAgIGFjdG9yczogZGF0YS5hY3RvcnMsXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2FmZVBhcnNlID0gQ2hhcmFjdGVyQm9keS5zYWZlUGFyc2UodG9aT0QpO1xyXG5cclxuICBpZiAoc2FmZVBhcnNlLnN1Y2Nlc3MpIHJldHVybiBzYWZlUGFyc2UuZGF0YTtcclxuXHJcbiAgcmV0dXJuIHRvWk9EO1xyXG59O1xyXG4iLCAiaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XHJcbmltcG9ydCB7IERhdGVCb2R5LCBGcm9tQm9keSwgTWVkaWFMaW5rQm9keSwgTWVkaWFUaXRsZUJvZHkgfSBmcm9tICcuL19tZWRpYSc7XHJcbmltcG9ydCB7IFBhZ2luYXRpb25Cb2R5LCB6b2ROdW1iZXIgfSBmcm9tICcuL191dGlsJztcclxuaW1wb3J0IHsgSW1hZ2VBZGRCb2R5LCBJbWFnZUJvZHkgfSBmcm9tICcuL19pbWFnZVpPRCc7XHJcbmltcG9ydCB7IElQZXJzb24sIFBlcnNvblJvbGVBcnJheSB9IGZyb20gJ0BhY3R1bmltZS90eXBlcyc7XHJcbmltcG9ydCB7IFBhdGNoUGFyYW1zQm9keSB9IGZyb20gJy4vX3BhdGNoWk9EJztcclxuXHJcbmV4cG9ydCBjb25zdCBQZXJzb25RdWVyeUJvZHkgPSB6Lm9iamVjdCh7XHJcbiAgaXNHcm91cGU6IHouYm9vbGVhbigpLFxyXG4gIG5hbWU6IE1lZGlhVGl0bGVCb2R5LnBhcnRpYWwoKSxcclxuICBiaXJ0aERhdGU6IHouc3RyaW5nKCksXHJcbiAgZGVhdGhEYXRlOiB6LnN0cmluZygpLFxyXG4gIGF2YXRhcjogSW1hZ2VCb2R5LnBhcnRpYWwoKSxcclxuICBsaW5rczogTWVkaWFMaW5rQm9keS5wYXJ0aWFsKCksXHJcbiAgY3JlYXRlZEF0OiB6LnN0cmluZygpLFxyXG4gIHVwZGF0ZWRBdDogei5zdHJpbmcoKSxcclxufSk7XHJcblxyXG5jb25zdCBjaGVjayA9ICh2OiBudW1iZXIpID0+IFstMSwgMV0uaW5jbHVkZXModik7XHJcbmNvbnN0IGNoZWNrRXJyID0gJ2xlIHNvcnQgZG9pdCBcdTAwRUF0cmUgc29pdCAtMSBvdSAxJztcclxuZXhwb3J0IGNvbnN0IFBlcnNvblNvcnRCb2R5ID0gei5vYmplY3Qoe1xyXG4gIGlzR3JvdXBlOiB6b2ROdW1iZXIoKS5yZWZpbmUoY2hlY2ssIGNoZWNrRXJyKSxcclxuICBiaXJ0aERhdGU6IHpvZE51bWJlcigpLnJlZmluZShjaGVjaywgY2hlY2tFcnIpLFxyXG4gIGRlYXRoRGF0ZTogem9kTnVtYmVyKCkucmVmaW5lKGNoZWNrLCBjaGVja0VyciksXHJcbiAgY3JlYXRlZEF0OiB6b2ROdW1iZXIoKS5yZWZpbmUoY2hlY2ssIGNoZWNrRXJyKSxcclxuICB1cGRhdGVkQXQ6IHpvZE51bWJlcigpLnJlZmluZShjaGVjaywgY2hlY2tFcnIpLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBQZXJzb25QYWdpbmF0aW9uQm9keSA9IFBhZ2luYXRpb25Cb2R5LmV4dGVuZCh7XHJcbiAgc29ydDogUGVyc29uU29ydEJvZHkucGFydGlhbCgpLFxyXG4gIHF1ZXJ5OiBQZXJzb25RdWVyeUJvZHkucGFydGlhbCgpLFxyXG4gIGZyb206IEZyb21Cb2R5LFxyXG59KS5wYXJ0aWFsKCk7XHJcblxyXG5leHBvcnQgdHlwZSBJUGVyc29uUGFnaW5hdGlvbkJvZHkgPSB6LmluZmVyPHR5cGVvZiBQZXJzb25QYWdpbmF0aW9uQm9keT47XHJcblxyXG5leHBvcnQgY29uc3QgUGVyc29uQm9keSA9IHpcclxuICAub2JqZWN0KHtcclxuICAgIGlzR3JvdXBlOiB6Lm9wdGlvbmFsKHouYm9vbGVhbigpKSxcclxuICAgIG5hbWU6IE1lZGlhVGl0bGVCb2R5LFxyXG4gICAgYmlydGhEYXRlOiB6Lm9wdGlvbmFsKERhdGVCb2R5LnBhcnRpYWwoKSksXHJcbiAgICBkZWF0aERhdGU6IHoub3B0aW9uYWwoRGF0ZUJvZHkucGFydGlhbCgpKSxcclxuICAgIGRlc2NyaXB0aW9uOiB6Lm9wdGlvbmFsKHouc3RyaW5nKCkpLFxyXG4gICAgYXZhdGFyOiB6Lm9wdGlvbmFsKEltYWdlQWRkQm9keSksXHJcbiAgICBsaW5rczogei5vcHRpb25hbCh6LmFycmF5KE1lZGlhTGlua0JvZHkpKSxcclxuICB9KVxyXG4gIC5zdHJpY3QoKTtcclxuXHJcbmV4cG9ydCB0eXBlIElQZXJzb25Cb2R5ID0gei5pbmZlcjx0eXBlb2YgUGVyc29uQm9keT47XHJcblxyXG5leHBvcnQgY29uc3QgUGVyc29uQ3JlYXRlQm9keSA9IFBhdGNoUGFyYW1zQm9keS5wYXJ0aWFsKCkuZXh0ZW5kKHtcclxuICBkYXRhOiBQZXJzb25Cb2R5LFxyXG59KTtcclxuXHJcbmV4cG9ydCB0eXBlIElQZXJzb25DcmVhdGVCb2R5ID0gei5pbmZlcjx0eXBlb2YgUGVyc29uQ3JlYXRlQm9keT47XHJcblxyXG5leHBvcnQgY29uc3QgUGVyc29uQWRkQm9keSA9IHoub2JqZWN0KHtcclxuICBpZDogei5vcHRpb25hbCh6LnN0cmluZygpKSxcclxuICBuZXdQZXJzb246IHoub3B0aW9uYWwoUGVyc29uQm9keSksXHJcbiAgcm9sZTogei5vcHRpb25hbCh6LmVudW0oUGVyc29uUm9sZUFycmF5KSksXHJcbn0pO1xyXG5cclxuZXhwb3J0IHR5cGUgSVBlcnNvbkFkZEJvZHkgPSB6LmluZmVyPHR5cGVvZiBQZXJzb25BZGRCb2R5PjtcclxuXHJcbmV4cG9ydCBjb25zdCBQZXJzb25EYXRhVG9aT0QgPSAoZGF0YTogSVBlcnNvbikgPT4ge1xyXG4gIGlmICghZGF0YSkgcmV0dXJuO1xyXG5cclxuICBjb25zdCB0b1pPRDogSVBlcnNvbkJvZHkgPSB7XHJcbiAgICBpc0dyb3VwZTogZGF0YS5pc0dyb3VwZSxcclxuICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgIGJpcnRoRGF0ZTogZGF0YS5iaXJ0aERhdGUsXHJcbiAgICBkZWF0aERhdGU6IGRhdGEuZGVhdGhEYXRlLFxyXG4gICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICBhdmF0YXI6IGRhdGEuYXZhdGFyLFxyXG4gICAgbGlua3M6IGRhdGEubGlua3MsXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2FmZVBhcnNlID0gUGVyc29uQm9keS5zYWZlUGFyc2UodG9aT0QpO1xyXG5cclxuICBpZiAoc2FmZVBhcnNlLnN1Y2Nlc3MpIHJldHVybiBzYWZlUGFyc2UuZGF0YTtcclxuXHJcbiAgcmV0dXJuIHRvWk9EO1xyXG59O1xyXG4iLCAiaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XHJcbmltcG9ydCB7IHpvZE51bWJlciB9IGZyb20gJy4vX3V0aWwnO1xyXG5pbXBvcnQge1xyXG4gIElNZWRpYURhdGUsXHJcbiAgSU1lZGlhTGluayxcclxuICBJTWVkaWFUaXRsZSxcclxuICBUYXJnZXRQYXRoQXJyYXksXHJcbn0gZnJvbSAnQGFjdHVuaW1lL3R5cGVzJztcclxuXHJcbmV4cG9ydCB0eXBlIEVxdWFsVHlwZTxULCBFeHBlY3RlZCBleHRlbmRzIFQ+ID0gVCBleHRlbmRzIEV4cGVjdGVkXHJcbiAgPyBFeHBlY3RlZCBleHRlbmRzIFRcclxuICAgID8gVFxyXG4gICAgOiBuZXZlclxyXG4gIDogbmV2ZXI7XHJcblxyXG5leHBvcnQgY29uc3QgRGF0ZUJvZHkgPSB6Lm9iamVjdCh7XHJcbiAgeWVhcjogei5vcHRpb25hbCh6b2ROdW1iZXIoKSksXHJcbiAgbW9udGg6IHoub3B0aW9uYWwoem9kTnVtYmVyKCkpLFxyXG4gIGRheTogei5vcHRpb25hbCh6b2ROdW1iZXIoKSksXHJcbiAgaG91cnM6IHoub3B0aW9uYWwoem9kTnVtYmVyKCkpLFxyXG4gIG1pbnV0ZXM6IHoub3B0aW9uYWwoem9kTnVtYmVyKCkpLFxyXG4gIHNlY29uZHM6IHoub3B0aW9uYWwoem9kTnVtYmVyKCkpLFxyXG59KTtcclxuXHJcbmNvbnN0IGNoZWNrID0gKHY6IG51bWJlcikgPT4gWy0xLCAxXS5pbmNsdWRlcyh2KTtcclxuY29uc3QgY2hlY2tFcnIgPSAnbGUgc29ydCBkb2l0IFx1MDBFQXRyZSBzb2l0IC0xIG91IDEnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERhdGVTb3J0Qm9keSA9IHoub2JqZWN0KHtcclxuICB5ZWFyOiB6Lm9wdGlvbmFsKHpvZE51bWJlcigpLnJlZmluZShjaGVjaywgY2hlY2tFcnIpKSxcclxuICBtb250aDogei5vcHRpb25hbCh6b2ROdW1iZXIoKS5yZWZpbmUoY2hlY2ssIGNoZWNrRXJyKSksXHJcbiAgZGF5OiB6Lm9wdGlvbmFsKHpvZE51bWJlcigpLnJlZmluZShjaGVjaywgY2hlY2tFcnIpKSxcclxuICBob3Vyczogei5vcHRpb25hbCh6b2ROdW1iZXIoKS5yZWZpbmUoY2hlY2ssIGNoZWNrRXJyKSksXHJcbiAgbWludXRlczogei5vcHRpb25hbCh6b2ROdW1iZXIoKS5yZWZpbmUoY2hlY2ssIGNoZWNrRXJyKSksXHJcbiAgc2Vjb25kczogei5vcHRpb25hbCh6b2ROdW1iZXIoKS5yZWZpbmUoY2hlY2ssIGNoZWNrRXJyKSksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lZGlhRGF0ZUJvZHkgPSB6Lm9iamVjdCh7XHJcbiAgc3RhcnQ6IERhdGVCb2R5LFxyXG4gIGVuZDogRGF0ZUJvZHksXHJcbn0pO1xyXG5cclxuZXhwb3J0IHR5cGUgSU1lZGlhRGF0ZUJvZHkgPSBFcXVhbFR5cGU8XHJcbiAgSU1lZGlhRGF0ZSxcclxuICB6LmluZmVyPHR5cGVvZiBNZWRpYURhdGVCb2R5PlxyXG4+O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lZGlhRGF0ZVNvcnRCb2R5ID0gei5vYmplY3Qoe1xyXG4gIHN0YXJ0OiB6Lm9wdGlvbmFsKERhdGVTb3J0Qm9keSksXHJcbiAgZW5kOiB6Lm9wdGlvbmFsKERhdGVTb3J0Qm9keSksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lZGlhSW1hZ2Vab2RTY2hlbWEgPSB6Lm9iamVjdCh7XHJcbiAgY292ZXI6IHoub3B0aW9uYWwoei5zdHJpbmcoKSksXHJcbiAgYmFubmVyOiB6Lm9wdGlvbmFsKHouc3RyaW5nKCkpLFxyXG59KTtcclxuXHJcbmNvbnN0IHVybFJlZ2V4ID1cclxuICAvXihodHRwczpcXC9cXC8pPyhbYS16MC05XSsoW1xcLVxcLl17MX1bYS16MC05XSspKlxcLlthLXpdezIsNX0oOlswLTldezEsNX0pPyhcXC8uKik/KSQvO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lZGlhTGlua0JvZHkgPSB6Lm9iamVjdCh7XHJcbiAgbmFtZTogei5zdHJpbmcoKS50cmltKCksXHJcbiAgdmFsdWU6IHouc3RyaW5nKCkudHJpbSgpLnJlZ2V4KHVybFJlZ2V4LCAnTGllbiBIVFRQUyBpbnZhbGlkZScpLFxyXG59KTtcclxuXHJcbmV4cG9ydCB0eXBlIElNZWRpYUxpbmtCb2R5ID0gRXF1YWxUeXBlPFxyXG4gIElNZWRpYUxpbmssXHJcbiAgei5pbmZlcjx0eXBlb2YgTWVkaWFMaW5rQm9keT5cclxuPjtcclxuXHJcbmV4cG9ydCBjb25zdCBNZWRpYVRpdGxlQm9keSA9IHoub2JqZWN0KHtcclxuICBvcmlnaW5hbDogelxyXG4gICAgLnN0cmluZygpXHJcbiAgICAudHJpbSgpXHJcbiAgICAubWluKDIsICdsZSBub20gZG9pdCBjb250ZW5pciBhdSBtb2lucyAyIGNhcmFjdFx1MDBFOHJlcycpLFxyXG4gIGFsaWFzOiB6Lm9wdGlvbmFsKFxyXG4gICAgei5hcnJheShcclxuICAgICAgei5zdHJpbmcoKS50cmltKCkubWluKDIsICdsZSBub20gZG9pdCBjb250ZW5pciBhdSBtb2lucyAyIGNhcmFjdFx1MDBFOHJlcycpXHJcbiAgICApXHJcbiAgKSxcclxufSk7XHJcblxyXG5leHBvcnQgdHlwZSBJTWVkaWFUaXRsZUJvZHkgPSBFcXVhbFR5cGU8XHJcbiAgT21pdDxJTWVkaWFUaXRsZSwgJ25vcm1hbCc+LFxyXG4gIHouaW5mZXI8dHlwZW9mIE1lZGlhVGl0bGVCb2R5PlxyXG4+O1xyXG5cclxuLy8gRFx1MDBFOWZpbmlyIHVuZSByZWdleCBwb3VyIGxlcyBVUkwgZGUgdmlkXHUwMEU5b3MgWW91VHViZVxyXG5jb25zdCB5b3V0dWJlVXJsUmVnZXggPSAvXihodHRwcz86XFwvXFwvKT8od3d3XFwuKT8oeW91dHViZVxcLmNvbXx5b3V0dVxcLj9iZSlcXC8uKyQvO1xyXG5cclxuLy8gQ3JcdTAwRTllciB1biBzY2hcdTAwRTltYSBab2QgcG91ciB2YWxpZGVyIGxlcyBVUkwgWW91VHViZVxyXG5leHBvcnQgY29uc3QgWW91dHViZVVSTFN0cmluZ0JvZHkgPSB6LnN0cmluZygpLnRyaW0oKS5yZWdleCh5b3V0dWJlVXJsUmVnZXgsIHtcclxuICBtZXNzYWdlOiBcIkwnVVJMIGRvaXQgXHUwMEVBdHJlIHVuZSBVUkwgZGUgdmlkXHUwMEU5byBZb3VUdWJlIHZhbGlkZS5cIixcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgRnJvbUJvZHkgPSB6Lm9iamVjdCh7XHJcbiAgaWQ6IHouc3RyaW5nKCksXHJcbiAgcGF0aDogei5lbnVtKFRhcmdldFBhdGhBcnJheSksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lZGlhRGVsZXRlQm9keSA9IHoub2JqZWN0KHtcclxuICByZWFzb246IHouc3RyaW5nKCksXHJcbiAgcmVjY3Vyc2l2ZTogei5ib29sZWFuKCksXHJcbn0pO1xyXG5cclxuZXhwb3J0IHR5cGUgSU1lZGlhRGVsZXRlQm9keSA9IHouaW5mZXI8dHlwZW9mIE1lZGlhRGVsZXRlQm9keT47XHJcblxyXG5leHBvcnQgY29uc3QgTWVkaWFWZXJpZnlCb2R5ID0gei5vYmplY3Qoe1xyXG4gIHJlYXNvbjogei5zdHJpbmcoKSxcclxuICByZWNjdXJzaXZlOiB6LmJvb2xlYW4oKSxcclxufSk7XHJcblxyXG5leHBvcnQgdHlwZSBJTWVkaWFWZXJpZnlCb2R5ID0gei5pbmZlcjx0eXBlb2YgTWVkaWFWZXJpZnlCb2R5PjtcclxuIiwgImltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xyXG5pbXBvcnQgeyBQYWdpbmF0aW9uQm9keSwgem9kTnVtYmVyIH0gZnJvbSAnLi9fdXRpbCc7XHJcbmltcG9ydCB7IElJbWFnZUZ1bGwsIEltYWdlTGFiZWxBcnJheSwgVGFyZ2V0UGF0aEFycmF5IH0gZnJvbSAnQGFjdHVuaW1lL3R5cGVzJztcclxuaW1wb3J0IHsgUGF0Y2hQYXJhbXNCb2R5IH0gZnJvbSAnLi9fcGF0Y2haT0QnO1xyXG5pbXBvcnQgeyBGcm9tQm9keSB9IGZyb20gJy4vX21lZGlhJztcclxuXHJcbmV4cG9ydCBjb25zdCBJbWFnZVF1ZXJ5Qm9keSA9IHoub2JqZWN0KHtcclxuICBsYWJlbDogei5lbnVtKEltYWdlTGFiZWxBcnJheSksXHJcbiAgY3JlYXRlZEF0OiB6LnN0cmluZygpLFxyXG4gIHVwZGF0ZWRBdDogei5zdHJpbmcoKSxcclxufSk7XHJcblxyXG5jb25zdCBjaGVjayA9ICh2OiBudW1iZXIpID0+IFstMSwgMV0uaW5jbHVkZXModik7XHJcbmNvbnN0IGNoZWNrRXJyID0gJ2xlIHNvcnQgZG9pdCBcdTAwRUF0cmUgc29pdCAtMSBvdSAxJztcclxuZXhwb3J0IGNvbnN0IEltYWdlU29ydEJvZHkgPSB6Lm9iamVjdCh7XHJcbiAgbGFiZWw6IHpvZE51bWJlcigpLnJlZmluZShjaGVjaywgY2hlY2tFcnIpLFxyXG4gIGNyZWF0ZWRBdDogem9kTnVtYmVyKCkucmVmaW5lKGNoZWNrLCBjaGVja0VyciksXHJcbiAgdXBkYXRlZEF0OiB6b2ROdW1iZXIoKS5yZWZpbmUoY2hlY2ssIGNoZWNrRXJyKSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgSW1hZ2VQYWdpbmF0aW9uQm9keSA9IFBhZ2luYXRpb25Cb2R5LmV4dGVuZCh7XHJcbiAgc29ydDogSW1hZ2VTb3J0Qm9keS5wYXJ0aWFsKCksXHJcbiAgcXVlcnk6IEltYWdlUXVlcnlCb2R5LnBhcnRpYWwoKSxcclxuICBmcm9tOiBGcm9tQm9keSxcclxufSkucGFydGlhbCgpO1xyXG5cclxuZXhwb3J0IHR5cGUgSUltYWdlUGFnaW5hdGlvbkJvZHkgPSB6LmluZmVyPHR5cGVvZiBJbWFnZVBhZ2luYXRpb25Cb2R5PjtcclxuXHJcbmV4cG9ydCBjb25zdCBJbWFnZUJvZHkgPSB6Lm9iamVjdCh7XHJcbiAgbGFiZWw6IHouZW51bShJbWFnZUxhYmVsQXJyYXkpLFxyXG4gIHZhbHVlOiB6LnN0cmluZygpLFxyXG4gIHRhcmdldFBhdGg6IHouZW51bShUYXJnZXRQYXRoQXJyYXkpLFxyXG59KTtcclxuXHJcbmV4cG9ydCB0eXBlIElJbWFnZUJvZHkgPSB6LmluZmVyPHR5cGVvZiBJbWFnZUJvZHk+O1xyXG5cclxuZXhwb3J0IGNvbnN0IEltYWdlQ3JlYXRlQm9keSA9IFBhdGNoUGFyYW1zQm9keS5wYXJ0aWFsKCkuZXh0ZW5kKHtcclxuICBkYXRhOiBJbWFnZUJvZHksXHJcbn0pO1xyXG5cclxuZXhwb3J0IHR5cGUgSUltYWdlQ3JlYXRlQm9keSA9IHouaW5mZXI8dHlwZW9mIEltYWdlQ3JlYXRlQm9keT47XHJcblxyXG5leHBvcnQgY29uc3QgSW1hZ2VBZGRCb2R5ID0gei5vYmplY3Qoe1xyXG4gIGlkOiB6Lm9wdGlvbmFsKHouc3RyaW5nKCkpLFxyXG4gIGxhYmVsOiB6Lm9wdGlvbmFsKHouZW51bShJbWFnZUxhYmVsQXJyYXkpKSxcclxuICBuZXdJbWFnZTogei5vcHRpb25hbChJbWFnZUJvZHkucGFydGlhbCh7IHRhcmdldFBhdGg6IHRydWUgfSkpLFxyXG59KTtcclxuXHJcbmV4cG9ydCB0eXBlIElJbWFnZUFkZEJvZHkgPSB6LmluZmVyPHR5cGVvZiBJbWFnZUFkZEJvZHk+O1xyXG5cclxuZXhwb3J0IGNvbnN0IEltYWdlRGF0YVRvWk9EID0gKGRhdGE6IElJbWFnZUZ1bGwpID0+IHtcclxuICBpZiAoIWRhdGEpIHJldHVybjtcclxuXHJcbiAgY29uc3QgdG9aT0Q6IElJbWFnZUJvZHkgPSB7XHJcbiAgICB2YWx1ZTogZGF0YS51cmwsXHJcbiAgICBsYWJlbDogZGF0YS5sYWJlbCxcclxuICAgIHRhcmdldFBhdGg6IGRhdGEudGFyZ2V0UGF0aCxcclxuICB9O1xyXG5cclxuICBjb25zdCBzYWZlUGFyc2UgPSBJbWFnZUJvZHkuc2FmZVBhcnNlKHRvWk9EKTtcclxuXHJcbiAgaWYgKHNhZmVQYXJzZS5zdWNjZXNzKSByZXR1cm4gc2FmZVBhcnNlLmRhdGE7XHJcblxyXG4gIHJldHVybiB0b1pPRDtcclxufTtcclxuIiwgImltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XHJcbmltcG9ydCB7IFBhZ2luYXRpb25Cb2R5LCB6b2ROdW1iZXIgfSBmcm9tIFwiLi9fdXRpbFwiO1xyXG5pbXBvcnQge1xyXG4gIFRhcmdldFBhdGhBcnJheSxcclxuICAvLyBQYXRjaEFjdGlvbkFycmF5LFxyXG4gIFBhdGNoU3RhdHVzQXJyYXksXHJcbiAgUGF0Y2hUeXBlQXJyYXksXHJcbn0gZnJvbSBcIkBhY3R1bmltZS90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBhdGNoUXVlcnlCb2R5ID0gei5vYmplY3Qoe1xyXG4gIGlkOiB6LnN0cmluZygpLFxyXG4gIHJlZjogei5vYmplY3QoeyBpZDogei5zdHJpbmcoKSB9KSxcclxuICB0eXBlOiB6LmVudW0oUGF0Y2hUeXBlQXJyYXkpLFxyXG4gIHN0YXR1czogei5lbnVtKFBhdGNoU3RhdHVzQXJyYXkpLFxyXG4gIHRhcmdldDogei5vYmplY3QoeyBpZDogei5zdHJpbmcoKSB9KSxcclxuICB0YXJnZXRQYXRoOiB6LmVudW0oVGFyZ2V0UGF0aEFycmF5KSxcclxuICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKSxcclxuICByZWFzb246IHouc3RyaW5nKCksXHJcbiAgb3JpZ2luYWw6IHouYW55KCksXHJcbiAgY2hhbmdlczogei5hbnkoKSxcclxuICBpc0NoYW5nZXNVcGRhdGVkOiB6LmJvb2xlYW4oKSxcclxuICBhdXRob3I6IHoub2JqZWN0KHsgaWQ6IHouc3RyaW5nKCkgfSksXHJcbiAgbW9kZXJhdG9yOiB6Lm9iamVjdCh7IGlkOiB6LnN0cmluZygpIH0pLFxyXG4gIGNyZWF0ZWRBdDogei5zdHJpbmcoKS5yZWZpbmUoKHYpID0+ICFpc05hTihEYXRlLnBhcnNlKHYpKSwgXCJEYXRlIGludmFsaWRlXCIpLFxyXG4gIHVwZGF0ZWRBdDogei5zdHJpbmcoKS5yZWZpbmUoKHYpID0+ICFpc05hTihEYXRlLnBhcnNlKHYpKSwgXCJEYXRlIGludmFsaWRlXCIpLFxyXG59KTtcclxuXHJcbmNvbnN0IGNoZWNrID0gKHY6IG51bWJlcikgPT4gWy0xLCAxXS5pbmNsdWRlcyh2KTtcclxuY29uc3QgY2hlY2tFcnIgPSBcImxlIHNvcnQgZG9pdCBcdTAwRUF0cmUgc29pdCAtMSBvdSAxXCI7XHJcbmV4cG9ydCBjb25zdCBQYXRjaFNvcnRCb2R5ID0gei5vYmplY3Qoe1xyXG4gIGlkOiB6Lm51bWJlcigpLnJlZmluZShjaGVjaywgY2hlY2tFcnIpLFxyXG4gIHJlZjogei5vYmplY3QoeyBpZDogei5udW1iZXIoKS5yZWZpbmUoY2hlY2ssIGNoZWNrRXJyKSB9KSxcclxuICB0eXBlOiB6Lm51bWJlcigpLnJlZmluZShjaGVjaywgY2hlY2tFcnIpLFxyXG4gIHN0YXR1czogei5udW1iZXIoKS5yZWZpbmUoY2hlY2ssIGNoZWNrRXJyKSxcclxuICB0YXJnZXQ6IHoubnVtYmVyKCkucmVmaW5lKGNoZWNrLCBjaGVja0VyciksXHJcbiAgdGFyZ2V0UGF0aDogei5udW1iZXIoKS5yZWZpbmUoY2hlY2ssIGNoZWNrRXJyKSxcclxuICBkZXNjcmlwdGlvbjogei5udW1iZXIoKS5yZWZpbmUoY2hlY2ssIGNoZWNrRXJyKSxcclxuICByZWFzb246IHoubnVtYmVyKCkucmVmaW5lKGNoZWNrLCBjaGVja0VyciksXHJcbiAgaXNDaGFuZ2VzVXBkYXRlZDogei5udW1iZXIoKS5yZWZpbmUoY2hlY2ssIGNoZWNrRXJyKSxcclxuICBhdXRob3I6IHoub2JqZWN0KHsgaWQ6IHoubnVtYmVyKCkucmVmaW5lKGNoZWNrLCBjaGVja0VycikgfSksXHJcbiAgbW9kZXJhdG9yOiB6Lm9iamVjdCh7IGlkOiB6Lm51bWJlcigpLnJlZmluZShjaGVjaywgY2hlY2tFcnIpIH0pLFxyXG4gIGNyZWF0ZWRBdDogei5udW1iZXIoKS5yZWZpbmUoY2hlY2ssIGNoZWNrRXJyKSxcclxuICB1cGRhdGVkQXQ6IHoubnVtYmVyKCkucmVmaW5lKGNoZWNrLCBjaGVja0VyciksXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgUGF0Y2hQYWdpbmF0aW9uQm9keSA9IFBhZ2luYXRpb25Cb2R5LmV4dGVuZCh7XHJcbiAgc29ydDogUGF0Y2hTb3J0Qm9keS5wYXJ0aWFsKCksXHJcbiAgcXVlcnk6IFBhdGNoUXVlcnlCb2R5LnBhcnRpYWwoKVxyXG59KVxyXG5cclxuZXhwb3J0IHR5cGUgSVBhdGNoUGFnaW5hdGlvbkJvZHkgPSB6LmluZmVyPHR5cGVvZiBQYXRjaFBhZ2luYXRpb25Cb2R5PjtcclxuXHJcbmV4cG9ydCBjb25zdCBQYXRjaFBhcmFtc0JvZHkgPSB6Lm9iamVjdCh7XHJcbiAgZGVzY3JpcHRpb246IHouc3RyaW5nKCksXHJcbiAgcmVhc29uOiB6LnN0cmluZygpLFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IFBhdGNoX1BhZ2luYXRpb25fWk9EID0gelxyXG4gIC5vYmplY3Qoe1xyXG4gICAgcGFnZTogem9kTnVtYmVyKCksXHJcbiAgICBsaW1pdDogem9kTnVtYmVyKCksXHJcbiAgICBzdHJpY3Q6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXHJcbiAgICBzb3J0OiB6XHJcbiAgICAgIC5vYmplY3Qoe1xyXG4gICAgICAgIHVwZGFwdGVkQXQ6IHouZW51bShbXCJERVNDXCIsIFwiQVNDXCJdKS5vcHRpb25hbCgpLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogei5lbnVtKFtcIkRFU0NcIiwgXCJBU0NcIl0pLm9wdGlvbmFsKCksXHJcbiAgICAgIH0pXHJcbiAgICAgIC5wYXJ0aWFsKClcclxuICAgICAgLnN0cmljdCgpLFxyXG4gICAgcXVlcnk6IHpcclxuICAgICAgLm9iamVjdCh7XHJcbiAgICAgICAgdGFyZ2V0OiB6Lm9wdGlvbmFsKHouc3RyaW5nKCkpLFxyXG4gICAgICAgIHRhcmdldFBhdGg6IHoub3B0aW9uYWwoXHJcbiAgICAgICAgICB6LnVuaW9uKFt6LmVudW0oVGFyZ2V0UGF0aEFycmF5KSwgei5hcnJheSh6LmVudW0oVGFyZ2V0UGF0aEFycmF5KSldKSxcclxuICAgICAgICApLFxyXG4gICAgICAgIGF1dGhvcjogei5vcHRpb25hbCh6LnN0cmluZygpKSxcclxuICAgICAgICBzdGF0dXM6IHoub3B0aW9uYWwoXHJcbiAgICAgICAgICB6LnVuaW9uKFtcclxuICAgICAgICAgICAgei5hcnJheSh6LmVudW0oUGF0Y2hTdGF0dXNBcnJheSkpLFxyXG4gICAgICAgICAgICB6LmVudW0oUGF0Y2hTdGF0dXNBcnJheSksXHJcbiAgICAgICAgICBdKSxcclxuICAgICAgICApLFxyXG4gICAgICAgIC8vIGFjdGlvbkxhYmVsOiB6Lm9wdGlvbmFsKHouZW51bShQYXRjaEFjdGlvbkFycmF5KSksXHJcbiAgICAgICAgYWN0aW9uVXNlcjogei5vcHRpb25hbCh6LnN0cmluZygpKSxcclxuICAgICAgICB0eXBlOiB6Lm9wdGlvbmFsKFxyXG4gICAgICAgICAgei51bmlvbihbei5lbnVtKFRhcmdldFBhdGhBcnJheSksIHouYXJyYXkoei5lbnVtKFBhdGNoVHlwZUFycmF5KSldKSxcclxuICAgICAgICApLFxyXG4gICAgICAgIHJlZjogei5vcHRpb25hbCh6LnN0cmluZygpKSxcclxuICAgICAgfSlcclxuICAgICAgLnBhcnRpYWwoKVxyXG4gICAgICAuc3RyaWN0KCksXHJcbiAgICB3aXRoOiB6XHJcbiAgICAgIC5vYmplY3Qoe1xyXG4gICAgICAgIGF1dGhvcjogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcclxuICAgICAgICB0YXJnZXQ6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXHJcbiAgICAgICAgYWN0aW9uczogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcclxuICAgICAgICByZWY6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXHJcbiAgICAgIH0pXHJcbiAgICAgIC5wYXJ0aWFsKClcclxuICAgICAgLnN0cmljdCgpLFxyXG4gIH0pXHJcbiAgLnBhcnRpYWwoKVxyXG4gIC5zdHJpY3QoKTtcclxuXHJcbmV4cG9ydCB0eXBlIElQYXRjaF9QYWdpbmF0aW9uX1pPRCA9IHouaW5mZXI8dHlwZW9mIFBhdGNoX1BhZ2luYXRpb25fWk9EPjtcclxuXHJcbmV4cG9ydCBjb25zdCBQYXRjaF9BY3Rpb25fWk9EID0gei5vYmplY3Qoe1xyXG4gIC8vIGxhYmVsOiB6LmVudW0oUGF0Y2hBY3Rpb25BcnJheSksXHJcbiAgbm90ZTogei5zdHJpbmcoKSxcclxuICBjaGFuZ2VzOiB6LmFueSgpLm9wdGlvbmFsKCksXHJcbn0pO1xyXG5cclxuZXhwb3J0IHR5cGUgSVBhdGNoX0FjdGlvbl9aT0QgPSB6LmluZmVyPHR5cGVvZiBQYXRjaF9BY3Rpb25fWk9EPjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQWRkQ2hhbmdlc1RvUGF0Y2hfWk9EID0gelxyXG4gIC5vYmplY3Qoe1xyXG4gICAgaWQ6IHouc3RyaW5nKCksXHJcbiAgICBub3RlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgICBkYXRhOiB6LmFueSgpXHJcbiAgfSlcclxuICAuc3RyaWN0KCk7XHJcblxyXG5leHBvcnQgdHlwZSBJQWRkQ2hhbmdlc1RvUGF0Y2hfWk9EID0gei5pbmZlcjx0eXBlb2YgQWRkQ2hhbmdlc1RvUGF0Y2hfWk9EPjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQWNjZXB0Q2hhbmdlc1RvUGF0Y2hfWk9EID0gelxyXG4gIC5vYmplY3Qoe1xyXG4gICAgaWQ6IHouc3RyaW5nKCksXHJcbiAgICBtb2RlcmF0b3JOb3RlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgfSlcclxuICAuc3RyaWN0KCk7XHJcblxyXG5leHBvcnQgdHlwZSBJQWNjZXB0Q2hhbmdlc1RvUGF0Y2hfWk9EID0gei5pbmZlcjx0eXBlb2YgQWNjZXB0Q2hhbmdlc1RvUGF0Y2hfWk9EPjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgRGVueUNoYW5nZXNUb1BhdGNoX1pPRCA9IHpcclxuICAub2JqZWN0KHtcclxuICAgIGlkOiB6LnN0cmluZygpLFxyXG4gICAgbW9kZXJhdG9yTm90ZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gIH0pXHJcbiAgLnN0cmljdCgpO1xyXG5cclxuZXhwb3J0IHR5cGUgSURlbnlDaGFuZ2VzVG9QYXRjaF9aT0QgPSB6LmluZmVyPHR5cGVvZiBEZW55Q2hhbmdlc1RvUGF0Y2hfWk9EPjtcclxuXHJcbmV4cG9ydCBjb25zdCBEZWxldGVQYXRjaF9aT0QgPSB6XHJcbiAgLm9iamVjdCh7XHJcbiAgICBpZDogei5zdHJpbmcoKSxcclxuICAgIG1vZGVyYXRvck5vdGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICB9KVxyXG4gIC5zdHJpY3QoKTtcclxuXHJcbmV4cG9ydCB0eXBlIElEZWxldGVQYXRjaF9aT0QgPSB6LmluZmVyPHR5cGVvZiBEZWxldGVQYXRjaF9aT0Q+OyIsICJpbXBvcnQgeyBJQ29tcGFueSB9IGZyb20gJ0BhY3R1bmltZS90eXBlcyc7XHJcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xyXG5pbXBvcnQgeyBEYXRlQm9keSwgRnJvbUJvZHksIE1lZGlhTGlua0JvZHksIE1lZGlhVGl0bGVCb2R5IH0gZnJvbSAnLi9fbWVkaWEnO1xyXG5pbXBvcnQgeyBQYWdpbmF0aW9uQm9keSwgem9kTnVtYmVyIH0gZnJvbSAnLi9fdXRpbCc7XHJcbmltcG9ydCB7IEltYWdlQWRkQm9keSwgSW1hZ2VCb2R5IH0gZnJvbSAnLi9faW1hZ2VaT0QnO1xyXG5pbXBvcnQgeyBQYXRjaFBhcmFtc0JvZHkgfSBmcm9tICcuL19wYXRjaFpPRCc7XHJcblxyXG5leHBvcnQgY29uc3QgQ29tcGFueVF1ZXJ5Qm9keSA9IHoub2JqZWN0KHtcclxuICB0eXBlOiB6LmVudW0oWydTVFVESU8nLCAnUFJPRFVDRVInXSksXHJcbiAgbmFtZTogTWVkaWFUaXRsZUJvZHkucGFydGlhbCgpLFxyXG4gIGxpbmtzOiBNZWRpYUxpbmtCb2R5LnBhcnRpYWwoKSxcclxuICBsb2dvOiBJbWFnZUJvZHkucGFydGlhbCgpLFxyXG4gIGNyZWF0ZWREYXRlOiB6Lm9wdGlvbmFsKERhdGVCb2R5LnBhcnRpYWwoKSksXHJcbiAgY3JlYXRlZEF0OiB6LnN0cmluZygpLFxyXG4gIHVwZGF0ZWRBdDogei5zdHJpbmcoKSxcclxufSk7XHJcblxyXG5jb25zdCBjaGVjayA9ICh2OiBudW1iZXIpID0+IFstMSwgMV0uaW5jbHVkZXModik7XHJcbmNvbnN0IGNoZWNrRXJyID0gJ2xlIHNvcnQgZG9pdCBcdTAwRUF0cmUgc29pdCAtMSBvdSAxJztcclxuZXhwb3J0IGNvbnN0IENvbXBhbnlTb3J0Qm9keSA9IHoub2JqZWN0KHtcclxuICB0eXBlOiB6b2ROdW1iZXIoKS5yZWZpbmUoY2hlY2ssIGNoZWNrRXJyKSxcclxuICBjcmVhdGVkRGF0ZTogei5vYmplY3Qoe1xyXG4gICAgeWVhcjogem9kTnVtYmVyKCkucmVmaW5lKGNoZWNrLCBjaGVja0VyciksXHJcbiAgICBtb250aDogem9kTnVtYmVyKCkucmVmaW5lKGNoZWNrLCBjaGVja0VyciksXHJcbiAgICBkYXk6IHpvZE51bWJlcigpLnJlZmluZShjaGVjaywgY2hlY2tFcnIpLFxyXG4gIH0pLFxyXG4gIGNyZWF0ZWRBdDogem9kTnVtYmVyKCkucmVmaW5lKGNoZWNrLCBjaGVja0VyciksXHJcbiAgdXBkYXRlZEF0OiB6b2ROdW1iZXIoKS5yZWZpbmUoY2hlY2ssIGNoZWNrRXJyKSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgQ29tcGFueVBhZ2luYXRpb25Cb2R5ID0gUGFnaW5hdGlvbkJvZHkuZXh0ZW5kKHtcclxuICBzb3J0OiBDb21wYW55U29ydEJvZHkucGFydGlhbCgpLFxyXG4gIHF1ZXJ5OiBDb21wYW55UXVlcnlCb2R5LnBhcnRpYWwoKSxcclxuICBmcm9tOiBGcm9tQm9keSxcclxufSkucGFydGlhbCgpO1xyXG5cclxuZXhwb3J0IHR5cGUgSUNvbXBhbnlQYWdpbmF0aW9uQm9keSA9IHouaW5mZXI8dHlwZW9mIENvbXBhbnlQYWdpbmF0aW9uQm9keT47XHJcblxyXG5leHBvcnQgY29uc3QgQ29tcGFueV9QYWdpbmF0aW9uX1pPRCA9IHoub2JqZWN0KHtcclxuICBwYWdlOiB6Lm51bWJlcigpLFxyXG4gIGxpbWl0OiB6Lm51bWJlcigpLFxyXG4gIHN0cmljdDogei5ib29sZWFuKCksXHJcbiAgc29ydDogQ29tcGFueVNvcnRCb2R5LnBhcnRpYWwoKSxcclxuICBxdWVyeTogQ29tcGFueVF1ZXJ5Qm9keS5wYXJ0aWFsKCksXHJcbn0pO1xyXG5cclxuZXhwb3J0IHR5cGUgSUNvbXBhbnlfUGFnaW5hdGlvbl9aT0QgPSB6LmluZmVyPHR5cGVvZiBDb21wYW55X1BhZ2luYXRpb25fWk9EPjtcclxuXHJcbmV4cG9ydCBjb25zdCBDb21wYW55Qm9keSA9IHpcclxuICAub2JqZWN0KHtcclxuICAgIHR5cGU6IHouZW51bShbJ1NUVURJTycsICdQUk9EVUNFUiddKSxcclxuICAgIG5hbWU6IE1lZGlhVGl0bGVCb2R5LFxyXG4gICAgZGVzY3JpcHRpb246IHoub3B0aW9uYWwoei5zdHJpbmcoKSksXHJcbiAgICBsaW5rczogei5vcHRpb25hbCh6LmFycmF5KE1lZGlhTGlua0JvZHkpKSxcclxuICAgIGxvZ286IHoub3B0aW9uYWwoSW1hZ2VBZGRCb2R5KSxcclxuICAgIGNyZWF0ZWREYXRlOiB6Lm9wdGlvbmFsKERhdGVCb2R5LnBhcnRpYWwoKSksXHJcbiAgfSlcclxuICAuc3RyaWN0KCk7XHJcblxyXG5leHBvcnQgdHlwZSBJQ29tcGFueUJvZHkgPSB6LmluZmVyPHR5cGVvZiBDb21wYW55Qm9keT47XHJcblxyXG5leHBvcnQgY29uc3QgQ29tcGFueUNyZWF0ZUJvZHkgPSBQYXRjaFBhcmFtc0JvZHkucGFydGlhbCgpLmV4dGVuZCh7XHJcbiAgZGF0YTogQ29tcGFueUJvZHksXHJcbn0pO1xyXG5cclxuZXhwb3J0IHR5cGUgSUNvbXBhbnlDcmVhdGVCb2R5ID0gei5pbmZlcjx0eXBlb2YgQ29tcGFueUNyZWF0ZUJvZHk+O1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbXBhbnlBZGRCb2R5ID0gei5vYmplY3Qoe1xyXG4gIGlkOiB6Lm9wdGlvbmFsKHouc3RyaW5nKCkpLFxyXG4gIG5ld0NvbXBhbnk6IHoub3B0aW9uYWwoQ29tcGFueUJvZHkpLFxyXG59KTtcclxuXHJcbmV4cG9ydCB0eXBlIElDb21wYW55QWRkQm9keSA9IHouaW5mZXI8dHlwZW9mIENvbXBhbnlBZGRCb2R5PjtcclxuXHJcbmV4cG9ydCBjb25zdCBDb21wYW55RGF0YVRvWk9EID0gKGRhdGE6IElDb21wYW55KSA9PiB7XHJcbiAgaWYgKCFkYXRhKSByZXR1cm47XHJcblxyXG4gIGNvbnN0IHRvWk9EOiBJQ29tcGFueUJvZHkgPSB7XHJcbiAgICB0eXBlOiBkYXRhLnR5cGUsXHJcbiAgICBuYW1lOiBkYXRhLm5hbWUsXHJcbiAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgIGxpbmtzOiBkYXRhLmxpbmtzLFxyXG4gICAgbG9nbzogZGF0YS5sb2dvLFxyXG4gICAgY3JlYXRlZERhdGU6IGRhdGEuY3JlYXRlZERhdGUsXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2FmZVBhcnNlID0gQ29tcGFueUJvZHkuc2FmZVBhcnNlKHRvWk9EKTtcclxuXHJcbiAgaWYgKHNhZmVQYXJzZS5zdWNjZXNzKSByZXR1cm4gc2FmZVBhcnNlLmRhdGE7XHJcblxyXG4gIHJldHVybiB0b1pPRDtcclxufTtcclxuIiwgImltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XHJcbmltcG9ydCB7IFBhZ2luYXRpb25Cb2R5IH0gZnJvbSBcIi4vX3V0aWxcIjtcclxuaW1wb3J0IHsgSUdyb3VwZSB9IGZyb20gXCJAYWN0dW5pbWUvdHlwZXNcIjtcclxuaW1wb3J0IHsgUGF0Y2hQYXJhbXNCb2R5IH0gZnJvbSBcIi4vX3BhdGNoWk9EXCI7XHJcbmltcG9ydCB7IE1lZGlhVGl0bGVCb2R5IH0gZnJvbSBcIi4vX21lZGlhXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR3JvdXBlUXVlcnlCb2R5ID0gei5vYmplY3Qoe1xyXG4gIG5hbWU6IE1lZGlhVGl0bGVCb2R5LnBhcnRpYWwoKSxcclxufSlcclxuXHJcbmNvbnN0IGNoZWNrID0gKHY6IG51bWJlcikgPT4gWy0xLCAxXS5pbmNsdWRlcyh2KTtcclxuY29uc3QgY2hlY2tFcnIgPSBcImxlIHNvcnQgZG9pdCBcdTAwRUF0cmUgc29pdCAtMSBvdSAxXCI7XHJcbmV4cG9ydCBjb25zdCBHcm91cGVTb3J0Qm9keSA9IHoub2JqZWN0KHtcclxuICBuYW1lOiB6Lm51bWJlcigpLnJlZmluZShjaGVjaywgY2hlY2tFcnIpLFxyXG4gIGNyZWF0ZWRBdDogei5udW1iZXIoKS5yZWZpbmUoY2hlY2ssIGNoZWNrRXJyKSxcclxuICB1cGRhdGVkQXQ6IHoubnVtYmVyKCkucmVmaW5lKGNoZWNrLCBjaGVja0VyciksXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgR3JvdXBlUGFnaW5hdGlvbkJvZHkgPSBQYWdpbmF0aW9uQm9keS5leHRlbmQoe1xyXG4gIHNvcnQ6IEdyb3VwZVNvcnRCb2R5LnBhcnRpYWwoKSxcclxuICBxdWVyeTogR3JvdXBlUXVlcnlCb2R5LnBhcnRpYWwoKVxyXG59KVxyXG5cclxuZXhwb3J0IHR5cGUgSUdyb3VwZVBhZ2luYXRpb25Cb2R5ID0gei5pbmZlcjx0eXBlb2YgR3JvdXBlUGFnaW5hdGlvbkJvZHk+O1xyXG5cclxuZXhwb3J0IGNvbnN0IEdyb3VwZUJvZHkgPSB6Lm9iamVjdCh7XHJcbiAgbmFtZTogTWVkaWFUaXRsZUJvZHksXHJcbn0pO1xyXG5cclxuZXhwb3J0IHR5cGUgSUdyb3VwZUJvZHkgPSB6LmluZmVyPHR5cGVvZiBHcm91cGVCb2R5PjtcclxuXHJcbmV4cG9ydCBjb25zdCBHcm91cGVDcmVhdGVCb2R5ID0gUGF0Y2hQYXJhbXNCb2R5LnBhcnRpYWwoKS5leHRlbmQoe1xyXG4gIGRhdGE6IEdyb3VwZUJvZHlcclxufSlcclxuXHJcbmV4cG9ydCB0eXBlIElHcm91cGVDcmVhdGVCb2R5ID0gei5pbmZlcjx0eXBlb2YgR3JvdXBlQ3JlYXRlQm9keT47XHJcblxyXG5leHBvcnQgY29uc3QgR3JvdXBlQWRkQm9keSA9IHoub2JqZWN0KHtcclxuICBpZDogei5vcHRpb25hbCh6LnN0cmluZygpKSxcclxuICBuZXdHcm91cGU6IHoub3B0aW9uYWwoR3JvdXBlQm9keSksXHJcbn0pO1xyXG5cclxuZXhwb3J0IHR5cGUgSUdyb3VwZUFkZEJvZHkgPSB6LmluZmVyPHR5cGVvZiBHcm91cGVBZGRCb2R5PjtcclxuXHJcbmV4cG9ydCBjb25zdCBHcm91cGVEYXRhVG9aT0QgPSAoZGF0YTogSUdyb3VwZSkgPT4ge1xyXG4gIGlmICghZGF0YSkgcmV0dXJuO1xyXG5cclxuICBjb25zdCB0b1pPRDogSUdyb3VwZUJvZHkgPSB7XHJcbiAgICBuYW1lOiBkYXRhLm5hbWUsXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2FmZVBhcnNlID0gR3JvdXBlQm9keS5zYWZlUGFyc2UodG9aT0QpO1xyXG5cclxuICBpZiAoc2FmZVBhcnNlLnN1Y2Nlc3MpIHJldHVybiBzYWZlUGFyc2UuZGF0YTtcclxuXHJcbiAgcmV0dXJuIHRvWk9EO1xyXG59O1xyXG4iLCAiaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XHJcbmltcG9ydCB7IENoYXJhY3RlckFkZEJvZHkgfSBmcm9tICcuL19jaGFyYWN0ZXJaT0QnO1xyXG5pbXBvcnQgeyBDb21wYW55QWRkQm9keSB9IGZyb20gJy4vX2NvbXBhbnlaT0QnO1xyXG5pbXBvcnQgeyBHcm91cGVBZGRCb2R5IH0gZnJvbSAnLi9fZ3JvdXBlWk9EJztcclxuaW1wb3J0IHtcclxuICBEYXRlQm9keSxcclxuICBNZWRpYURhdGVCb2R5LFxyXG4gIE1lZGlhRGF0ZVNvcnRCb2R5LFxyXG4gIE1lZGlhTGlua0JvZHksXHJcbiAgTWVkaWFUaXRsZUJvZHksXHJcbiAgWW91dHViZVVSTFN0cmluZ0JvZHksXHJcbn0gZnJvbSAnLi9fbWVkaWEnO1xyXG5pbXBvcnQgeyBQZXJzb25BZGRCb2R5IH0gZnJvbSAnLi9fcGVyc29uWk9EJztcclxuaW1wb3J0IHsgUGFnaW5hdGlvbkJvZHksIHpvZEJvb2xlYW4gfSBmcm9tICcuL191dGlsJztcclxuaW1wb3J0IHsgSW1hZ2VBZGRCb2R5IH0gZnJvbSAnLi9faW1hZ2VaT0QnO1xyXG5pbXBvcnQgeyBQYXRjaFBhcmFtc0JvZHkgfSBmcm9tICcuL19wYXRjaFpPRCc7XHJcbmltcG9ydCB7XHJcbiAgTWFuZ2FGb3JtYXRBcnJheSxcclxuICBJTWFuZ2EsXHJcbiAgTWVkaWFHZW5yZXNBcnJheSxcclxuICBNZWRpYVBhcmVudExhYmVsQXJyYXksXHJcbiAgTWVkaWFTb3VyY2VBcnJheSxcclxuICBNZWRpYVN0YXR1c0FycmF5XHJcbn0gZnJvbSAnQGFjdHVuaW1lL3R5cGVzJztcclxuXHJcbmNvbnN0IE1hbmdhQ2hhcHRlclZvbHVtZUJvZHkgPSB6Lm9iamVjdCh7XHJcbiAgYWlyaW5nOiB6Lm51bWJlcigpLFxyXG4gIG5leHRBaXJpbmdEYXRlOiB6Lm9wdGlvbmFsKERhdGVCb2R5LnBhcnRpYWwoKSksXHJcbiAgdG90YWw6IHoubnVtYmVyKClcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgTWFuZ2FRdWVyeUJvZHkgPSB6Lm9iamVjdCh7XHJcbiAgdGl0bGU6IE1lZGlhVGl0bGVCb2R5LnBhcnRpYWwoKSxcclxuICBkYXRlOiBNZWRpYURhdGVCb2R5LnBhcnRpYWwoKSxcclxuICBmb3JtYXQ6IHouZW51bShNYW5nYUZvcm1hdEFycmF5KSxcclxuICB2Zjogei5ib29sZWFuKCksXHJcbiAgZ2VucmVzOiB6LmFycmF5KHouZW51bShNZWRpYUdlbnJlc0FycmF5KSksXHJcbiAgc3RhdHVzOiB6LmVudW0oTWVkaWFTdGF0dXNBcnJheSksXHJcbiAgdHJhaWxlcjogWW91dHViZVVSTFN0cmluZ0JvZHksXHJcbiAgY2hhcHRlcnM6IE1hbmdhQ2hhcHRlclZvbHVtZUJvZHkucGFydGlhbCgpLFxyXG4gIHZvbHVtZXM6IE1hbmdhQ2hhcHRlclZvbHVtZUJvZHkucGFydGlhbCgpLFxyXG4gIGFkdWx0OiB6LmJvb2xlYW4oKSxcclxuICBleHBsaWNpdDogei5ib29sZWFuKCksXHJcbiAgbGlua3M6IE1lZGlhTGlua0JvZHkucGFydGlhbCgpLFxyXG4gIGNyZWF0ZWRBdDogei5zdHJpbmcoKSxcclxuICB1cGRhdGVkQXQ6IHouc3RyaW5nKCksXHJcbn0pO1xyXG5cclxuZXhwb3J0IHR5cGUgSU1hbmdhUXVlcnlCb2R5ID0gei5pbmZlcjx0eXBlb2YgTWFuZ2FRdWVyeUJvZHk+O1xyXG5cclxuY29uc3QgY2hlY2sgPSAodjogbnVtYmVyKSA9PiBbLTEsIDFdLmluY2x1ZGVzKHYpO1xyXG5jb25zdCBjaGVja0VyciA9ICdsZSBzb3J0IGRvaXQgXHUwMEVBdHJlIHNvaXQgLTEgb3UgMSc7XHJcbmV4cG9ydCBjb25zdCBNYW5nYVNvcnRCb2R5ID0gei5vYmplY3Qoe1xyXG4gIHZmOiB6Lm51bWJlcigpLnJlZmluZShjaGVjaywgY2hlY2tFcnIpLFxyXG4gIHN0YXR1czogei5udW1iZXIoKS5yZWZpbmUoY2hlY2ssIGNoZWNrRXJyKSxcclxuICBhZHVsdDogei5udW1iZXIoKS5yZWZpbmUoY2hlY2ssIGNoZWNrRXJyKSxcclxuICBkYXRlOiBNZWRpYURhdGVTb3J0Qm9keSxcclxuICBleHBsaWNpdDogei5udW1iZXIoKS5yZWZpbmUoY2hlY2ssIGNoZWNrRXJyKSxcclxuICBjcmVhdGVkQXQ6IHoubnVtYmVyKCkucmVmaW5lKGNoZWNrLCBjaGVja0VyciksXHJcbiAgdXBkYXRlZEF0OiB6Lm51bWJlcigpLnJlZmluZShjaGVjaywgY2hlY2tFcnIpLFxyXG59KTtcclxuXHJcbmV4cG9ydCB0eXBlIElNYW5nYVNvcnRCb2R5ID0gei5pbmZlcjx0eXBlb2YgTWFuZ2FTb3J0Qm9keT47XHJcblxyXG5leHBvcnQgY29uc3QgTWFuZ2FQYWdpbmF0aW9uQm9keSA9IFBhZ2luYXRpb25Cb2R5LmV4dGVuZCh7XHJcbiAgc29ydDogTWFuZ2FTb3J0Qm9keS5wYXJ0aWFsKCksXHJcbiAgcXVlcnk6IE1hbmdhUXVlcnlCb2R5LnBhcnRpYWwoKSxcclxufSk7XHJcblxyXG5leHBvcnQgdHlwZSBJTWFuZ2FQYWdpbmF0aW9uQm9keSA9IHouaW5mZXI8dHlwZW9mIE1hbmdhUGFnaW5hdGlvbkJvZHk+O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1hbmdhQWRkQm9keSA9IHoub2JqZWN0KHtcclxuICBpZDogei5zdHJpbmcoKSxcclxuICBwYXJlbnRMYWJlbDogei5vcHRpb25hbCh6LmVudW0oTWVkaWFQYXJlbnRMYWJlbEFycmF5KSksXHJcbn0pO1xyXG5cclxuZXhwb3J0IHR5cGUgSU1hbmdhQWRkQm9keSA9IHouaW5mZXI8dHlwZW9mIE1hbmdhQWRkQm9keT47XHJcblxyXG5leHBvcnQgY29uc3QgTWFuZ2FCb2R5ID0gelxyXG4gIC5vYmplY3Qoe1xyXG4gICAgZ3JvdXBlOiBHcm91cGVBZGRCb2R5LFxyXG4gICAgcGFyZW50OiB6Lm9wdGlvbmFsKE1hbmdhQWRkQm9keSksXHJcbiAgICBcclxuICAgIHNvdXJjZTogei5vcHRpb25hbCh6LmVudW0oTWVkaWFTb3VyY2VBcnJheSkpLFxyXG4gICAgdGl0bGU6IE1lZGlhVGl0bGVCb2R5LFxyXG4gICAgZGF0ZTogei5vcHRpb25hbChNZWRpYURhdGVCb2R5LnBhcnRpYWwoKSksXHJcbiAgICBjb3Zlcjogei5vcHRpb25hbChJbWFnZUFkZEJvZHkucGFydGlhbCgpKSxcclxuICAgIGJhbm5lcjogei5vcHRpb25hbChJbWFnZUFkZEJvZHkucGFydGlhbCgpKSxcclxuICAgIHN5bm9wc2lzOiB6Lm9wdGlvbmFsKHouc3RyaW5nKCkpLFxyXG4gICAgZm9ybWF0OiB6LmVudW0oTWFuZ2FGb3JtYXRBcnJheSksXHJcbiAgICB2Zjogei5vcHRpb25hbCh6b2RCb29sZWFuKCkpLFxyXG4gICAgZ2VucmVzOiB6Lm9wdGlvbmFsKHouYXJyYXkoei5lbnVtKE1lZGlhR2VucmVzQXJyYXkpKSksXHJcbiAgICAvLyB0aGVtZXM6IHoub3B0aW9uYWwoei5hcnJheSh6LnN0cmluZygpKSksXHJcbiAgICBzdGF0dXM6IHoub3B0aW9uYWwoei5lbnVtKE1lZGlhU3RhdHVzQXJyYXkpKSxcclxuICAgIHRyYWlsZXI6IHoub3B0aW9uYWwoWW91dHViZVVSTFN0cmluZ0JvZHkpLFxyXG4gICAgY2hhcHRlcnM6IHoub3B0aW9uYWwoTWFuZ2FDaGFwdGVyVm9sdW1lQm9keS5wYXJ0aWFsKCkpLFxyXG4gICAgdm9sdW1lczogei5vcHRpb25hbChNYW5nYUNoYXB0ZXJWb2x1bWVCb2R5LnBhcnRpYWwoKSksXHJcbiAgICBhZHVsdDogei5vcHRpb25hbCh6b2RCb29sZWFuKCkpLFxyXG4gICAgZXhwbGljaXQ6IHoub3B0aW9uYWwoem9kQm9vbGVhbigpKSxcclxuICAgIGxpbmtzOiB6Lm9wdGlvbmFsKHouYXJyYXkoTWVkaWFMaW5rQm9keSkpLFxyXG4gICAgY29tcGFueXM6IHoub3B0aW9uYWwoei5hcnJheShDb21wYW55QWRkQm9keSkpLFxyXG4gICAgc3RhZmZzOiB6Lm9wdGlvbmFsKHouYXJyYXkoUGVyc29uQWRkQm9keSkpLFxyXG4gICAgY2hhcmFjdGVyczogei5vcHRpb25hbCh6LmFycmF5KENoYXJhY3RlckFkZEJvZHkpKVxyXG4gIH0pXHJcbiAgLnN0cmljdCgpXHJcblxyXG5leHBvcnQgdHlwZSBJTWFuZ2FCb2R5ID0gei5pbmZlcjx0eXBlb2YgTWFuZ2FCb2R5PjtcclxuXHJcbmV4cG9ydCBjb25zdCBNYW5nYUNyZWF0ZUJvZHkgPSBQYXRjaFBhcmFtc0JvZHkucGFydGlhbCgpLmV4dGVuZCh7XHJcbiAgZGF0YTogTWFuZ2FCb2R5LFxyXG59KTtcclxuXHJcbmV4cG9ydCB0eXBlIElNYW5nYUNyZWF0ZUJvZHkgPSB6LmluZmVyPHR5cGVvZiBNYW5nYUNyZWF0ZUJvZHk+O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1hbmdhRGF0YVRvWk9EID0gKGRhdGE6IElNYW5nYSkgPT4ge1xyXG4gIGlmICghZGF0YSkgcmV0dXJuO1xyXG5cclxuICBjb25zdCB0b1pPRDogSU1hbmdhQm9keSA9IHtcclxuICAgIGdyb3VwZTogZGF0YS5ncm91cGUsXHJcbiAgICBwYXJlbnQ6IGRhdGEucGFyZW50LFxyXG4gICAgc291cmNlOiBkYXRhLnNvdXJjZSxcclxuICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxyXG4gICAgc3lub3BzaXM6IGRhdGEuc3lub3BzaXMsXHJcbiAgICBjb3ZlcjogZGF0YS5jb3ZlcixcclxuICAgIGJhbm5lcjogZGF0YS5iYW5uZXIsXHJcbiAgICBkYXRlOiBkYXRhLmRhdGUsXHJcbiAgICBzdGF0dXM6IGRhdGEuc3RhdHVzLFxyXG4gICAgZm9ybWF0OiBkYXRhLmZvcm1hdCxcclxuICAgIHZmOiBkYXRhLnZmLFxyXG4gICAgY2hhcHRlcnM6IGRhdGEuY2hhcHRlcnMsXHJcbiAgICB2b2x1bWVzOiBkYXRhLnZvbHVtZXMsXHJcbiAgICBhZHVsdDogZGF0YS5hZHVsdCxcclxuICAgIHRyYWlsZXI6IGRhdGEudHJhaWxlcixcclxuICAgIGV4cGxpY2l0OiBkYXRhLmV4cGxpY2l0LFxyXG4gICAgZ2VucmVzOiBkYXRhLmdlbnJlcyxcclxuICAgIGxpbmtzOiBkYXRhLmxpbmtzLFxyXG4gICAgY29tcGFueXM6IGRhdGEuY29tcGFueXMsXHJcbiAgICBzdGFmZnM6IGRhdGEuc3RhZmZzLFxyXG4gICAgY2hhcmFjdGVyczogZGF0YS5jaGFyYWN0ZXJzXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2FmZVBhcnNlID0gTWFuZ2FCb2R5LnNhZmVQYXJzZSh7IGRhdGE6IHRvWk9EIH0pO1xyXG5cclxuICBpZiAoc2FmZVBhcnNlLnN1Y2Nlc3MpIHJldHVybiBzYWZlUGFyc2UuZGF0YTtcclxuXHJcbiAgcmV0dXJuIHRvWk9EO1xyXG59O1xyXG4iLCAiaW1wb3J0IHsgVHJhY2tUeXBlQXJyYXksIElUcmFjayB9IGZyb20gJ0BhY3R1bmltZS90eXBlcyc7XHJcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xyXG5pbXBvcnQgeyBEYXRlQm9keSwgRnJvbUJvZHksIE1lZGlhTGlua0JvZHksIE1lZGlhVGl0bGVCb2R5IH0gZnJvbSAnLi9fbWVkaWEnO1xyXG5pbXBvcnQgeyBQZXJzb25BZGRCb2R5LCBQZXJzb25Cb2R5IH0gZnJvbSAnLi9fcGVyc29uWk9EJztcclxuaW1wb3J0IHsgUGFnaW5hdGlvbkJvZHksIHpvZE51bWJlciB9IGZyb20gJy4vX3V0aWwnO1xyXG5pbXBvcnQgeyBJbWFnZUFkZEJvZHksIEltYWdlQm9keSB9IGZyb20gJy4vX2ltYWdlWk9EJztcclxuaW1wb3J0IHsgUGF0Y2hQYXJhbXNCb2R5IH0gZnJvbSAnLi9fcGF0Y2haT0QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRyYWNrUXVlcnlCb2R5ID0gei5vYmplY3Qoe1xyXG4gIG5hbWU6IE1lZGlhVGl0bGVCb2R5LnBhcnRpYWwoKSxcclxuICB0eXBlOiB6LmVudW0oVHJhY2tUeXBlQXJyYXkpLFxyXG4gIHJlbGVhc2VEYXRlOiB6Lm9wdGlvbmFsKERhdGVCb2R5LnBhcnRpYWwoKSksXHJcbiAgYXJ0aXN0czogUGVyc29uQm9keS5wYXJ0aWFsKCksXHJcbiAgY292ZXI6IEltYWdlQm9keS5wYXJ0aWFsKCksXHJcbiAgbGlua3M6IE1lZGlhTGlua0JvZHkucGFydGlhbCgpLFxyXG4gIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLFxyXG4gIGNyZWF0ZWRBdDogei5zdHJpbmcoKSxcclxuICB1cGRhdGVkQXQ6IHouc3RyaW5nKCksXHJcbn0pO1xyXG5cclxuY29uc3QgY2hlY2sgPSAodjogbnVtYmVyKSA9PiBbLTEsIDFdLmluY2x1ZGVzKHYpO1xyXG5jb25zdCBjaGVja0VyciA9ICdsZSBzb3J0IGRvaXQgXHUwMEVBdHJlIHNvaXQgLTEgb3UgMSc7XHJcbmV4cG9ydCBjb25zdCBUcmFja1NvcnRCb2R5ID0gei5vYmplY3Qoe1xyXG4gIHR5cGU6IHpvZE51bWJlcigpLnJlZmluZShjaGVjaywgY2hlY2tFcnIpLFxyXG4gIHJlbGVhc2VEYXRlOiB6b2ROdW1iZXIoKS5yZWZpbmUoY2hlY2ssIGNoZWNrRXJyKSxcclxuICBjcmVhdGVkQXQ6IHpvZE51bWJlcigpLnJlZmluZShjaGVjaywgY2hlY2tFcnIpLFxyXG4gIHVwZGF0ZWRBdDogem9kTnVtYmVyKCkucmVmaW5lKGNoZWNrLCBjaGVja0VyciksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRyYWNrUGFnaW5hdGlvbkJvZHkgPSBQYWdpbmF0aW9uQm9keS5leHRlbmQoe1xyXG4gIHNvcnQ6IFRyYWNrU29ydEJvZHkucGFydGlhbCgpLFxyXG4gIHF1ZXJ5OiBUcmFja1F1ZXJ5Qm9keS5wYXJ0aWFsKCksXHJcbiAgZnJvbTogRnJvbUJvZHksXHJcbn0pLnBhcnRpYWwoKTtcclxuXHJcbmV4cG9ydCB0eXBlIElUcmFja1BhZ2luYXRpb25Cb2R5ID0gei5pbmZlcjx0eXBlb2YgVHJhY2tQYWdpbmF0aW9uQm9keT47XHJcblxyXG5leHBvcnQgY29uc3QgVHJhY2tfUGFnaW5hdGlvbl9aT0QgPSB6Lm9iamVjdCh7XHJcbiAgcGFnZTogei5udW1iZXIoKSxcclxuICBsaW1pdDogei5udW1iZXIoKSxcclxuICBzdHJpY3Q6IHouYm9vbGVhbigpLFxyXG4gIHNvcnQ6IFRyYWNrU29ydEJvZHkucGFydGlhbCgpLFxyXG4gIHF1ZXJ5OiBUcmFja1F1ZXJ5Qm9keS5wYXJ0aWFsKCksXHJcbn0pO1xyXG5cclxuZXhwb3J0IHR5cGUgSVRyYWNrX1BhZ2luYXRpb25fWk9EID0gei5pbmZlcjx0eXBlb2YgVHJhY2tfUGFnaW5hdGlvbl9aT0Q+O1xyXG5cclxuZXhwb3J0IGNvbnN0IFRyYWNrQm9keSA9IHpcclxuICAub2JqZWN0KHtcclxuICAgIG5hbWU6IE1lZGlhVGl0bGVCb2R5LFxyXG4gICAgdHlwZTogei5lbnVtKFRyYWNrVHlwZUFycmF5KSxcclxuICAgIHJlbGVhc2VEYXRlOiB6Lm9wdGlvbmFsKERhdGVCb2R5LnBhcnRpYWwoKSksXHJcbiAgICBhcnRpc3RzOiB6Lm9wdGlvbmFsKHouYXJyYXkoUGVyc29uQWRkQm9keSkpLFxyXG4gICAgY292ZXI6IHoub3B0aW9uYWwoSW1hZ2VBZGRCb2R5KSxcclxuICAgIGRlc2NyaXB0aW9uOiB6Lm9wdGlvbmFsKHouc3RyaW5nKCkpLFxyXG4gICAgbGlua3M6IHoub3B0aW9uYWwoei5hcnJheShNZWRpYUxpbmtCb2R5KSksXHJcbiAgfSlcclxuICAuc3RyaWN0KCk7XHJcblxyXG5leHBvcnQgdHlwZSBJVHJhY2tCb2R5ID0gei5pbmZlcjx0eXBlb2YgVHJhY2tCb2R5PjtcclxuXHJcbmV4cG9ydCBjb25zdCBUcmFja0NyZWF0ZUJvZHkgPSBQYXRjaFBhcmFtc0JvZHkucGFydGlhbCgpLmV4dGVuZCh7XHJcbiAgZGF0YTogVHJhY2tCb2R5LFxyXG59KTtcclxuXHJcbmV4cG9ydCB0eXBlIElUcmFja0NyZWF0ZUJvZHkgPSB6LmluZmVyPHR5cGVvZiBUcmFja0NyZWF0ZUJvZHk+O1xyXG5cclxuZXhwb3J0IGNvbnN0IFRyYWNrQWRkQm9keSA9IHoub2JqZWN0KHtcclxuICBpZDogei5vcHRpb25hbCh6LnN0cmluZygpKSxcclxuICBuZXdUcmFjazogei5vcHRpb25hbChUcmFja0JvZHkpLFxyXG59KTtcclxuXHJcbmV4cG9ydCB0eXBlIElUcmFja0FkZEJvZHkgPSB6LmluZmVyPHR5cGVvZiBUcmFja0FkZEJvZHk+O1xyXG5cclxuZXhwb3J0IGNvbnN0IFRyYWNrRGF0YVRvWk9EID0gKGRhdGE6IElUcmFjaykgPT4ge1xyXG4gIGlmICghZGF0YSkgcmV0dXJuO1xyXG5cclxuICBjb25zdCB0b1pPRDogSVRyYWNrQm9keSA9IHtcclxuICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgIHR5cGU6IGRhdGEudHlwZSxcclxuICAgIHJlbGVhc2VEYXRlOiBkYXRhLnJlbGVhc2VEYXRlLFxyXG4gICAgY292ZXI6IGRhdGEuY292ZXIsXHJcbiAgICBhcnRpc3RzOiBkYXRhLmFydGlzdHMsXHJcbiAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgIGxpbmtzOiBkYXRhLmxpbmtzLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNhZmVQYXJzZSA9IFRyYWNrQm9keS5zYWZlUGFyc2UodG9aT0QpO1xyXG5cclxuICBpZiAoc2FmZVBhcnNlLnN1Y2Nlc3MpIHJldHVybiBzYWZlUGFyc2UuZGF0YTtcclxuXHJcbiAgcmV0dXJuIHRvWk9EO1xyXG59O1xyXG4iLCAiaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcblxuZXhwb3J0IGNvbnN0IEF1dGhfVmFsaWRhdGlvbl9aT0QgPSB6Lm9iamVjdCh7XG4gIGVtYWlsOiB6XG4gICAgLnN0cmluZyh7IHJlcXVpcmVkX2Vycm9yOiBcIlZldWlsbGV6IHJlbnNlaWduZXIgdm90cmUgZW1haWxcIiB9KVxuICAgIC5lbWFpbCh7IG1lc3NhZ2U6IFwiRW1haWwgaW52YWxpZGVcIiB9KSxcbiAgY29kZTogei5zdHJpbmcoeyByZXF1aXJlZF9lcnJvcjogXCJWZXVpbGxleiByZW5zZWlnbmVyIGxlIGNvZGVcIiB9KSxcbn0pO1xuXG5leHBvcnQgdHlwZSBJQXV0aF9WYWxpZGF0aW9uX1pPRCA9IHouaW5mZXI8dHlwZW9mIEF1dGhfVmFsaWRhdGlvbl9aT0Q+O1xuIiwgImltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XG5cbmV4cG9ydCBjb25zdCBDb25uZXhpb25fWm9kX1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgZW1haWw6IHpcbiAgICAuc3RyaW5nKHsgcmVxdWlyZWRfZXJyb3I6IFwiVmV1aWxsZXogcmVuc2VpZ25lciB2b3RyZSBlbWFpbFwiIH0pXG4gICAgLmVtYWlsKHsgbWVzc2FnZTogXCJMJ2VtYWlsIGVzdCBpbnZhbGlkZVwiIH0pLFxuICBjYXB0Y2hhOiB6LnN0cmluZyh7IHJlcXVpcmVkX2Vycm9yOiBcIlZldWlsbGV6IHJcdTAwRTlzb3VkcmUgbGUgY2FwdGNoYVwiIH0pLFxufSk7XG5cbmV4cG9ydCB0eXBlIElDb25uZXhpb25fWm9kX1NjaGVtYSA9IHouaW5mZXI8dHlwZW9mIENvbm5leGlvbl9ab2RfU2NoZW1hPjtcbiIsICJpbXBvcnQgeyBNYW5nYUJvZHksIE1hbmdhRGF0YVRvWk9EIH0gZnJvbSBcIi4vX21hbmdhWk9EXCI7XHJcbmltcG9ydCB7IEFuaW1lQm9keSwgQW5pbWVEYXRhVG9aT0QgfSBmcm9tIFwiLi9fYW5pbWVaT0RcIjtcclxuaW1wb3J0IHsgUGVyc29uQm9keSwgUGVyc29uRGF0YVRvWk9EIH0gZnJvbSBcIi4vX3BlcnNvblpPRFwiO1xyXG5pbXBvcnQgeyBDaGFyYWN0ZXJEYXRhVG9aT0QsIENoYXJhY3RlckJvZHkgfSBmcm9tIFwiLi9fY2hhcmFjdGVyWk9EXCI7XHJcbmltcG9ydCB7IFRyYWNrQm9keSwgVHJhY2tEYXRhVG9aT0QgfSBmcm9tIFwiLi9fdHJhY2taT0RcIjtcclxuaW1wb3J0IHsgQ29tcGFueURhdGFUb1pPRCwgQ29tcGFueUJvZHkgfSBmcm9tIFwiLi9fY29tcGFueVpPRFwiO1xyXG5pbXBvcnQgeyBHcm91cGVEYXRhVG9aT0QgfSBmcm9tIFwiLi9fZ3JvdXBlWk9EXCI7XHJcbmltcG9ydCB7IElUYXJnZXRQYXRoIH0gZnJvbSBcIkBhY3R1bmltZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBab2RFZmZlY3RzLCBab2RPYmplY3QgfSBmcm9tIFwiem9kXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVGFyZ2V0UGF0aFRvWm9kOiBSZWNvcmQ8SVRhcmdldFBhdGgsIChkYXRhOiBhbnkpID0+IGFueT4gPSB7XHJcbiAgR3JvdXBlOiBHcm91cGVEYXRhVG9aT0QsXHJcbiAgTWFuZ2E6IE1hbmdhRGF0YVRvWk9ELFxyXG4gIEFuaW1lOiBBbmltZURhdGFUb1pPRCxcclxuICBQZXJzb246IFBlcnNvbkRhdGFUb1pPRCxcclxuICBDaGFyYWN0ZXI6IENoYXJhY3RlckRhdGFUb1pPRCxcclxuICBUcmFjazogVHJhY2tEYXRhVG9aT0QsXHJcbiAgQ29tcGFueTogQ29tcGFueURhdGFUb1pPRCxcclxuICAuLi4oe30gYXMgUmVjb3JkPFxyXG4gICAgRXhjbHVkZTxcclxuICAgICAgSVRhcmdldFBhdGgsXHJcbiAgICAgIHwgXCJHcm91cGVcIlxyXG4gICAgICB8IFwiTWFuZ2FcIlxyXG4gICAgICB8IFwiQW5pbWVcIlxyXG4gICAgICB8IFwiUGVyc29uXCJcclxuICAgICAgfCBcIkNoYXJhY3RlclwiXHJcbiAgICAgIHwgXCJUcmFja1wiXHJcbiAgICAgIHwgXCJDb21wYW55XCJcclxuICAgID4sXHJcbiAgICAoZGF0YTogYW55KSA9PiBhbnlcclxuICA+KSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBUYXJnZXRQYXRoWm9kUmVzb2x2ZXI6IFJlY29yZDxJVGFyZ2V0UGF0aCwgWm9kT2JqZWN0PGFueT4gfCBab2RFZmZlY3RzPFpvZE9iamVjdDxhbnk+Pj4gPSB7XHJcbiAgQW5pbWU6IEFuaW1lQm9keSxcclxuICBNYW5nYTogTWFuZ2FCb2R5LFxyXG4gIENoYXJhY3RlcjogQ2hhcmFjdGVyQm9keSxcclxuICBQZXJzb246IFBlcnNvbkJvZHksXHJcbiAgQ29tcGFueTogQ29tcGFueUJvZHksXHJcbiAgVHJhY2s6IFRyYWNrQm9keSxcclxuICAuLi4oe30gYXMgUmVjb3JkPFxyXG4gICAgRXhjbHVkZTxcclxuICAgICAgSVRhcmdldFBhdGgsXHJcbiAgICAgIFwiTWFuZ2FcIiB8IFwiQW5pbWVcIiB8IFwiUGVyc29uXCIgfCBcIkNoYXJhY3RlclwiIHwgXCJUcmFja1wiIHwgXCJDb21wYW55XCJcclxuICAgID4sXHJcbiAgICBab2RPYmplY3Q8YW55PlxyXG4gID4pLFxyXG59O1xyXG4iLCAiaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5pbXBvcnQgeyBJbWFnZUFkZEJvZHkgfSBmcm9tICcuL19pbWFnZVpPRCc7XG5cbmV4cG9ydCBjb25zdCBJbnNjcmlwdGlvbl9ab2RfU2NoZW1hID0gei5vYmplY3Qoe1xuICBhY2NvdW50OiB6Lm9iamVjdCh7XG4gICAgZW1haWw6IHpcbiAgICAgIC5zdHJpbmcoeyByZXF1aXJlZF9lcnJvcjogJ1ZldWlsbGV6IHJlbnNlaWduZXIgdm90cmUgZW1haWwnIH0pXG4gICAgICAuZW1haWwoeyBtZXNzYWdlOiBcIkwnZW1haWwgZXN0IGludmFsaWRlXCIgfSksXG4gICAgcGFzc3dvcmQ6IHouc3RyaW5nKHtcbiAgICAgIHJlcXVpcmVkX2Vycm9yOiAnVmV1aWxsZXogcmVuc2VpZ25lciB2b3RyZSBtb3QgZGUgcGFzc2UnLFxuICAgIH0pLFxuICB9KSxcbiAgdXNlcjogei5vYmplY3Qoe1xuICAgIHVzZXJuYW1lOiB6XG4gICAgICAuc3RyaW5nKHsgcmVxdWlyZWRfZXJyb3I6IFwiVmV1aWxsZXogcmVuc2VpZ25lciB2b3RyZSBub20gZCd1dGlsaXNhdGV1clwiIH0pXG4gICAgICAucmVnZXgoL15bQS1aYS16MC05Xy1dezIsMjF9JC9ncywgXCJOb20gZCd1dGlsaXNhdGV1ciBpbnZhbGlkZVwiKVxuICAgICAgLm1pbigyLCBcIkxlIG5vbSBkJ3V0aWxpc2F0ZXVyIGRvaXQgY29udGVuaXIgYXUgbW9pbnMgMiBjYXJhY3RcdTAwRThyZXNcIilcbiAgICAgIC5tYXgoMjEsIFwiTGUgbm9tIGQndXRpbGlzYXRldXIgZG9pdCBjb250ZW5pciBhdSBtYXhpbXVtIDIxIGNhcmFjdFx1MDBFOHJlc1wiKVxuICAgICAgLnJlZmluZShcbiAgICAgICAgKHYpID0+ICF6LnN0cmluZygpLnVybCgpLnNhZmVQYXJzZSh2KS5zdWNjZXNzLFxuICAgICAgICBcIlZvdHJlIG5vbSBkJ3V0aWxpc2F0ZXVyIG5lIGRvaXQgcGFzIGNvbnRlbmlyIGRlIGxpZW5cIlxuICAgICAgKSxcbiAgICBkaXNwbGF5TmFtZTogelxuICAgICAgLnN0cmluZyh7IHJlcXVpcmVkX2Vycm9yOiAnVmV1aWxsZXogcmVuc2VpZ25lciB2b3RyZSBwc2V1ZG9ueW1lJyB9KVxuICAgICAgLm1pbigyLCAnTGUgcHNldWRvbnltZSBkb2l0IGNvbnRlbmlyIGF1IG1vaW5zIDIgY2FyYWN0XHUwMEU4cmVzJylcbiAgICAgIC5tYXgoMzIsICdMZSBwc2V1ZG9ueW1lIGRvaXQgY29udGVuaXIgYXUgbWF4aW11bSAzMiBjYXJhY3RcdTAwRThyZXMnKVxuICAgICAgLnJlZmluZShcbiAgICAgICAgKHYpID0+ICF6LnN0cmluZygpLnVybCgpLnNhZmVQYXJzZSh2KS5zdWNjZXNzLFxuICAgICAgICAnVm90cmUgcHNldWRvbnltZSBuZSBkb2l0IHBhcyBjb250ZW5pciBkZSBsaWVuJ1xuICAgICAgKSxcbiAgICBkZXNjcmlwdGlvbjogei5vcHRpb25hbChcbiAgICAgIHpcbiAgICAgICAgLnN0cmluZygpXG4gICAgICAgIC5tYXgoMjAwLCAnTWF4aW11bSBkZSAyMDAgY2FyYWN0XHUwMEU4cmVzJylcbiAgICAgICAgLnJlZmluZShcbiAgICAgICAgICAodikgPT4gIXouc3RyaW5nKCkudXJsKCkuc2FmZVBhcnNlKHYpLnN1Y2Nlc3MsXG4gICAgICAgICAgJ0xhIGJpb2dyYXBoaWUgbmUgZG9pdCBwYXMgY29udGVuaXIgZGUgbGllbidcbiAgICAgICAgKVxuICAgICksXG4gICAgYXZhdGFyOiB6Lm9wdGlvbmFsKEltYWdlQWRkQm9keSksXG4gICAgYmFubmVyOiB6Lm9wdGlvbmFsKEltYWdlQWRkQm9keSksXG4gIH0pLFxuICBjYXB0Y2hhOiB6LnN0cmluZyh7IHJlcXVpcmVkX2Vycm9yOiAnVmV1aWxsZXogclx1MDBFOXNvdWRyZSBsZSBjYXB0Y2hhJyB9KSxcbn0pO1xuXG5leHBvcnQgdHlwZSBJSW5zY3JpcHRpb25fWm9kX1NjaGVtYSA9IHouaW5mZXI8dHlwZW9mIEluc2NyaXB0aW9uX1pvZF9TY2hlbWE+O1xuIiwgImltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XG5cbmV4cG9ydCBjb25zdCBDcmVhdGVfTWVzc2FnZV9aT0QgPSB6Lm9iamVjdCh7XG4gIGNvbnRlbnQ6IHouc3RyaW5nKCksXG4gIHJlcGx5VG86IHoub3B0aW9uYWwoei5zdHJpbmcoKSksXG59KTtcblxuZXhwb3J0IHR5cGUgSUNyZWF0ZV9NZXNzYWdlX1pPRCA9IHouaW5mZXI8dHlwZW9mIENyZWF0ZV9NZXNzYWdlX1pPRD47XG4iLCAiaW1wb3J0IHtcbiAgUmVwb3J0U3RhdHVzQXJyYXksXG4gIFJlcG9ydFN1YmplY3RBcnJheSxcbiAgVGFyZ2V0UGF0aEFycmF5LFxufSBmcm9tIFwiQGFjdHVuaW1lL3R5cGVzXCI7XG5pbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xuaW1wb3J0IHsgem9kTnVtYmVyIH0gZnJvbSBcIi4vX3V0aWxcIjtcblxuZXhwb3J0IGNvbnN0IFJlcG9ydF9QYWdpbmF0aW9uX1pPRCA9IHpcbiAgLm9iamVjdCh7XG4gICAgcGFnZTogem9kTnVtYmVyKCksXG4gICAgbGltaXQ6IHpvZE51bWJlcigpLFxuICAgIHN0cmljdDogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgICBzb3J0OiB6XG4gICAgICAub2JqZWN0KHtcbiAgICAgICAgdXBkYXB0ZWRBdDogei5lbnVtKFtcIkRFU0NcIiwgXCJBU0NcIl0pLm9wdGlvbmFsKCksXG4gICAgICAgIGNyZWF0ZWRBdDogei5lbnVtKFtcIkRFU0NcIiwgXCJBU0NcIl0pLm9wdGlvbmFsKCksXG4gICAgICB9KVxuICAgICAgLnBhcnRpYWwoKVxuICAgICAgLnN0cmljdCgpLFxuICAgIHF1ZXJ5OiB6XG4gICAgICAub2JqZWN0KHtcbiAgICAgICAgc3ViamVjdDogei5lbnVtKFJlcG9ydFN1YmplY3RBcnJheSkub3B0aW9uYWwoKSxcbiAgICAgICAgc3RhdHVzOiB6LmVudW0oUmVwb3J0U3RhdHVzQXJyYXkpLm9wdGlvbmFsKCksXG4gICAgICAgIGJ5OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gICAgICAgIGF1dGhvcjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICAgICAgICB0YXJnZXQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgICAgICAgdGFyZ2V0UGF0aDogei5lbnVtKFRhcmdldFBhdGhBcnJheSkub3B0aW9uYWwoKSxcbiAgICAgIH0pXG4gICAgICAucGFydGlhbCgpXG4gICAgICAuc3RyaWN0KCksXG4gICAgd2l0aDogelxuICAgICAgLm9iamVjdCh7XG4gICAgICAgIGJ5OiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICAgICAgICBhdXRob3I6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gICAgICAgIHRhcmdldDogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgICAgIH0pXG4gICAgICAucGFydGlhbCgpXG4gICAgICAuc3RyaWN0KCksXG4gIH0pXG4gIC5wYXJ0aWFsKClcbiAgLnN0cmljdCgpO1xuXG5leHBvcnQgdHlwZSBJUmVwb3J0X1BhZ2luYXRpb25fWk9EID0gei5pbmZlcjx0eXBlb2YgUmVwb3J0X1BhZ2luYXRpb25fWk9EPjtcblxuZXhwb3J0IGNvbnN0IENyZWF0ZV9SZXBvcnRfWk9EID0gelxuICAub2JqZWN0KHtcbiAgICBzdGF0dXM6IHouZW51bShSZXBvcnRTdGF0dXNBcnJheSksXG4gIH0pXG4gIC5zdHJpY3QoKTtcblxuZXhwb3J0IHR5cGUgSUNyZWF0ZV9SZXBvcnRfWk9EID0gei5pbmZlcjx0eXBlb2YgQ3JlYXRlX1JlcG9ydF9aT0Q+O1xuXG5leHBvcnQgY29uc3QgQ3JlYXRlX1JlcG9ydF9aT0RfRk9STSA9IHoub2JqZWN0KHtcbiAgbm90ZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBkYXRhOiBDcmVhdGVfUmVwb3J0X1pPRCxcbn0pO1xuXG5leHBvcnQgdHlwZSBJQ3JlYXRlX1JlcG9ydF9aT0RfRk9STSA9IHouaW5mZXI8dHlwZW9mIENyZWF0ZV9SZXBvcnRfWk9EX0ZPUk0+O1xuXG5cbmV4cG9ydCBjb25zdCBQYXRjaF9SZXBvcnRfWk9EID0gelxuICAub2JqZWN0KHtcbiAgICBzdGF0dXM6IHouZW51bShSZXBvcnRTdGF0dXNBcnJheSksXG4gIH0pXG4gIC5zdHJpY3QoKVxuICAucGFydGlhbCgpO1xuXG5leHBvcnQgdHlwZSBJUGF0Y2hfUmVwb3J0X1pPRCA9IHouaW5mZXI8dHlwZW9mIFBhdGNoX1JlcG9ydF9aT0Q+O1xuIiwgImltcG9ydCB7XG4gIFBhdGNoU3RhdHVzQXJyYXksXG4gIFBhdGNoVHlwZUFycmF5LFxuICBUYXJnZXRQYXRoQXJyYXksXG59IGZyb20gXCJAYWN0dW5pbWUvdHlwZXNcIjtcbmltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XG5pbXBvcnQgeyB6b2ROdW1iZXIgfSBmcm9tIFwiLi9fdXRpbFwiO1xuXG5leHBvcnQgY29uc3QgVXBkYXRlX1BhZ2luYXRpb25fWk9EID0gelxuICAub2JqZWN0KHtcbiAgICBwYWdlOiB6b2ROdW1iZXIoKSxcbiAgICBsaW1pdDogem9kTnVtYmVyKCksXG4gICAgc3RyaWN0OiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICAgIHNvcnQ6IHpcbiAgICAgIC5vYmplY3Qoe1xuICAgICAgICB1cGRhcHRlZEF0OiB6LmVudW0oW1wiREVTQ1wiLCBcIkFTQ1wiXSkub3B0aW9uYWwoKSxcbiAgICAgICAgY3JlYXRlZEF0OiB6LmVudW0oW1wiREVTQ1wiLCBcIkFTQ1wiXSkub3B0aW9uYWwoKSxcbiAgICAgIH0pXG4gICAgICAucGFydGlhbCgpXG4gICAgICAuc3RyaWN0KCksXG4gICAgcXVlcnk6IHpcbiAgICAgIC5vYmplY3Qoe1xuICAgICAgICB0YXJnZXQ6IHoub3B0aW9uYWwoei5zdHJpbmcoKSksXG4gICAgICAgIHRhcmdldFBhdGg6IHoub3B0aW9uYWwoXG4gICAgICAgICAgei51bmlvbihbei5lbnVtKFRhcmdldFBhdGhBcnJheSksIHouYXJyYXkoei5lbnVtKFRhcmdldFBhdGhBcnJheSkpXSksXG4gICAgICAgICksXG4gICAgICAgIGF1dGhvcjogei5vcHRpb25hbCh6LnN0cmluZygpKSxcbiAgICAgICAgc3RhdHVzOiB6Lm9wdGlvbmFsKFxuICAgICAgICAgIHoudW5pb24oW1xuICAgICAgICAgICAgei5hcnJheSh6LmVudW0oUGF0Y2hTdGF0dXNBcnJheSkpLFxuICAgICAgICAgICAgei5lbnVtKFBhdGNoU3RhdHVzQXJyYXkpLFxuICAgICAgICAgIF0pLFxuICAgICAgICApLFxuICAgICAgICAvLyBhY3Rpb25MYWJlbDogei5vcHRpb25hbCh6LmVudW0oUGF0Y2hBY3Rpb25BcnJheSkpLFxuICAgICAgICBhY3Rpb25Vc2VyOiB6Lm9wdGlvbmFsKHouc3RyaW5nKCkpLFxuICAgICAgICB0eXBlOiB6Lm9wdGlvbmFsKFxuICAgICAgICAgIHoudW5pb24oW3ouZW51bShUYXJnZXRQYXRoQXJyYXkpLCB6LmFycmF5KHouZW51bShQYXRjaFR5cGVBcnJheSkpXSksXG4gICAgICAgICksXG4gICAgICAgIHJlZjogei5vcHRpb25hbCh6LnN0cmluZygpKSxcbiAgICAgIH0pXG4gICAgICAucGFydGlhbCgpXG4gICAgICAuc3RyaWN0KCksXG4gICAgd2l0aDogelxuICAgICAgLm9iamVjdCh7XG4gICAgICAgIGF1dGhvcjogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgICAgICAgdGFyZ2V0OiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICAgICAgICBhY3Rpb25zOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICAgICAgICByZWY6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gICAgICB9KVxuICAgICAgLnBhcnRpYWwoKVxuICAgICAgLnN0cmljdCgpLFxuICB9KVxuICAucGFydGlhbCgpXG4gIC5zdHJpY3QoKTtcblxuZXhwb3J0IHR5cGUgSVVwZGF0ZV9QYWdpbmF0aW9uX1pPRCA9IHouaW5mZXI8dHlwZW9mIFVwZGF0ZV9QYWdpbmF0aW9uX1pPRD47XG5cbmV4cG9ydCBjb25zdCBVcGRhdGVfQWN0aW9uX1pPRCA9IHoub2JqZWN0KHtcbiAgLy8gbGFiZWw6IHouZW51bShQYXRjaEFjdGlvbkFycmF5KSxcbiAgbm90ZTogei5zdHJpbmcoKSxcbiAgY2hhbmdlczogei5hbnkoKS5vcHRpb25hbCgpLFxufSk7XG5cbmV4cG9ydCB0eXBlIElVcGRhdGVfQWN0aW9uX1pPRCA9IHouaW5mZXI8dHlwZW9mIFVwZGF0ZV9BY3Rpb25fWk9EPjtcbiIsICJpbXBvcnQge1xuICBVc2VyUm9sZXNBcnJheSxcbiAgSVVzZXIsXG4gIFVzZXJBbmltZUxpc3RTdGF0dXNBcnJheSxcbn0gZnJvbSAnQGFjdHVuaW1lL3R5cGVzJztcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkJvZHksIHpvZE51bWJlciB9IGZyb20gJy4vX3V0aWwnO1xuaW1wb3J0IHsgSW1hZ2VBZGRCb2R5IH0gZnJvbSAnLi9faW1hZ2VaT0QnO1xuaW1wb3J0IHsgUGF0Y2hQYXJhbXNCb2R5IH0gZnJvbSAnLi9fcGF0Y2haT0QnO1xuXG5leHBvcnQgY29uc3QgVXNlclF1ZXJ5Qm9keSA9IHoub2JqZWN0KHtcbiAgdXNlcm5hbWU6IHouc3RyaW5nKCksXG4gIGRpc3BsYXlOYW1lOiB6LnN0cmluZygpLFxuICByb2xlczogei5hcnJheSh6LmVudW0oVXNlclJvbGVzQXJyYXkpKSxcbiAgY3JlYXRlZEF0OiB6LnN0cmluZygpLFxuICB1cGRhdGVkQXQ6IHouc3RyaW5nKCksXG59KTtcblxuY29uc3QgY2hlY2sgPSAodjogbnVtYmVyKSA9PiBbLTEsIDFdLmluY2x1ZGVzKHYpO1xuY29uc3QgY2hlY2tFcnIgPSAnbGUgc29ydCBkb2l0IFx1MDBFQXRyZSBzb2l0IC0xIG91IDEnO1xuZXhwb3J0IGNvbnN0IFVzZXJTb3J0Qm9keSA9IHoub2JqZWN0KHtcbiAgdXNlcm5hbWU6IHpvZE51bWJlcigpLnJlZmluZShjaGVjaywgY2hlY2tFcnIpLFxuICBkaXNwbGF5TmFtZTogem9kTnVtYmVyKCkucmVmaW5lKGNoZWNrLCBjaGVja0VyciksXG4gIHJvbGVzOiB6b2ROdW1iZXIoKS5yZWZpbmUoY2hlY2ssIGNoZWNrRXJyKSxcbiAgY3JlYXRlZEF0OiB6b2ROdW1iZXIoKS5yZWZpbmUoY2hlY2ssIGNoZWNrRXJyKSxcbiAgdXBkYXRlZEF0OiB6b2ROdW1iZXIoKS5yZWZpbmUoY2hlY2ssIGNoZWNrRXJyKSxcbn0pO1xuXG5leHBvcnQgY29uc3QgVXNlclBhZ2luYXRpb25Cb2R5ID0gUGFnaW5hdGlvbkJvZHkuZXh0ZW5kKHtcbiAgc29ydDogVXNlclNvcnRCb2R5LnBhcnRpYWwoKSxcbiAgcXVlcnk6IFVzZXJRdWVyeUJvZHkucGFydGlhbCgpLFxufSk7XG5cbmV4cG9ydCB0eXBlIElVc2VyUGFnaW5hdGlvbkJvZHkgPSB6LmluZmVyPHR5cGVvZiBVc2VyUGFnaW5hdGlvbkJvZHk+O1xuXG5leHBvcnQgY29uc3QgVXNlck9wdGlvbnMgPSB6Lm9iamVjdCh7XG4gIGRpc3BsYXlVbnZlcmlmaWVkOiB6LmJvb2xlYW4oKSxcbn0pO1xuXG5leHBvcnQgY29uc3QgVXNlckJvZHkgPSB6Lm9iamVjdCh7XG4gIGRpc3BsYXlOYW1lOiB6LnN0cmluZygpLFxuICBkZXNjcmlwdGlvbjogei5vcHRpb25hbCh6LnN0cmluZygpKSxcbiAgYXZhdGFyOiB6Lm9wdGlvbmFsKEltYWdlQWRkQm9keSksXG4gIGJhbm5lcjogei5vcHRpb25hbChJbWFnZUFkZEJvZHkpLFxuICBvcHRpb25zOiB6Lm9wdGlvbmFsKFVzZXJPcHRpb25zLnBhcnRpYWwoKSksXG59KTtcblxuZXhwb3J0IHR5cGUgSVVzZXJCb2R5ID0gei5pbmZlcjx0eXBlb2YgVXNlckJvZHk+O1xuXG5leHBvcnQgY29uc3QgVXNlckNyZWF0ZUJvZHkgPSBQYXRjaFBhcmFtc0JvZHkucGFydGlhbCgpLmV4dGVuZCh7XG4gIGRhdGE6IFVzZXJCb2R5LFxufSk7XG5cbmV4cG9ydCB0eXBlIElVc2VyQ3JlYXRlQm9keSA9IHouaW5mZXI8dHlwZW9mIFVzZXJDcmVhdGVCb2R5PjtcblxuZXhwb3J0IGNvbnN0IFVzZXJDbGllbnRCb2R5ID0gVXNlckJvZHkuZXh0ZW5kKHtcbiAgYWNjb3VudElkOiB6LnN0cmluZygpLFxuICB1c2VybmFtZTogei5zdHJpbmcoKSxcbiAgcm9sZXM6IHouYXJyYXkoei5zdHJpbmcoKSksXG59KTtcblxuZXhwb3J0IHR5cGUgSVVzZXJDbGllbnRCb2R5ID0gei5pbmZlcjx0eXBlb2YgVXNlckNsaWVudEJvZHk+O1xuXG5leHBvcnQgY29uc3QgVXNlckNsaWVudENyZWF0ZUJvZHkgPSBQYXRjaFBhcmFtc0JvZHkucGFydGlhbCgpLmV4dGVuZCh7XG4gIGRhdGE6IFVzZXJCb2R5LFxufSk7XG5cbmV4cG9ydCB0eXBlIElVc2VyQ2xpZW50Q3JlYXRlQm9keSA9IHouaW5mZXI8dHlwZW9mIFVzZXJDbGllbnRDcmVhdGVCb2R5PjtcblxuZXhwb3J0IGNvbnN0IFVzZXJBZGRCb2R5ID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbn0pO1xuXG5leHBvcnQgdHlwZSBJVXNlckFkZEJvZHkgPSB6LmluZmVyPHR5cGVvZiBVc2VyQWRkQm9keT47XG5cbmV4cG9ydCBjb25zdCBVc2VyRGF0YVRvWk9EID0gKGRhdGE6IElVc2VyKTogUGFydGlhbDxJVXNlckNyZWF0ZUJvZHk+ID0+IHtcbiAgaWYgKCFkYXRhKSByZXR1cm4ge307XG5cbiAgY29uc3QgdG9aT0Q6IFBhcnRpYWw8SVVzZXJCb2R5PiA9IHtcbiAgICBkaXNwbGF5TmFtZTogZGF0YS5kaXNwbGF5TmFtZSxcbiAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcbiAgICBhdmF0YXI6IGRhdGEuYXZhdGFyLFxuICAgIGJhbm5lcjogZGF0YS5iYW5uZXIsXG4gICAgb3B0aW9uczogZGF0YS5vcHRpb25zLFxuICB9O1xuXG4gIGNvbnN0IHNhZmVQYXJzZSA9IFVzZXJCb2R5LnNhZmVQYXJzZSh0b1pPRCk7XG5cbiAgaWYgKHNhZmVQYXJzZS5zdWNjZXNzKSByZXR1cm4gc2FmZVBhcnNlLmRhdGE7XG5cbiAgcmV0dXJuIHRvWk9EO1xufTtcblxuZXhwb3J0IGNvbnN0IFVzZXJBbmltZUxpc3RlX1pPRCA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIGVwaXNvZGU6IHpvZE51bWJlcigpLm9wdGlvbmFsKCksXG4gIHN0YXR1czogei5lbnVtKFVzZXJBbmltZUxpc3RTdGF0dXNBcnJheSksXG4gIHNjb3JlOiB6b2ROdW1iZXIoKS5vcHRpb25hbCgpLFxuICBub3RlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGZhdm9yaXM6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gIHJhbms6IHpvZE51bWJlcigpLm9wdGlvbmFsKCksXG4gIHN0YXJ0ZWRBdDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBjb21wbGV0ZWRBdDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxufSk7XG5cbmV4cG9ydCB0eXBlIElVc2VyQW5pbWVMaXN0ZV9aT0QgPSB6LmluZmVyPHR5cGVvZiBVc2VyQW5pbWVMaXN0ZV9aT0Q+O1xuIiwgImltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xyXG5pbXBvcnQgeyBQYWdpbmF0aW9uQm9keSB9IGZyb20gJy4vX3V0aWwnO1xyXG5pbXBvcnQgeyBUYXJnZXRQYXRoQXJyYXkgfSBmcm9tICdAYWN0dW5pbWUvdHlwZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdsb2JhbFNlYXJjaFF1ZXJ5Qm9keSA9IHoub2JqZWN0KHtcclxuICBzZWFyY2g6IHouc3RyaW5nKCksXHJcbiAgcGF0aDogei5lbnVtKFRhcmdldFBhdGhBcnJheSksXHJcbn0pO1xyXG5cclxuY29uc3QgY2hlY2sgPSAodjogbnVtYmVyKSA9PiBbLTEsIDFdLmluY2x1ZGVzKHYpO1xyXG5jb25zdCBjaGVja0VyciA9ICdsZSBzb3J0IGRvaXQgXHUwMEVBdHJlIHNvaXQgLTEgb3UgMSc7XHJcbmV4cG9ydCBjb25zdCBHbG9iYWxTZWFyY2hTb3J0Qm9keSA9IHoub2JqZWN0KHtcclxuICBvcmlnaW5hbDogei5udW1iZXIoKS5yZWZpbmUoY2hlY2ssIGNoZWNrRXJyKSxcclxuICBub3JtYWw6IHoubnVtYmVyKCkucmVmaW5lKGNoZWNrLCBjaGVja0VyciksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdsb2JhbFNlYXJjaFBhZ2luYXRpb25Cb2R5ID0gUGFnaW5hdGlvbkJvZHkuZXh0ZW5kKHtcclxuICBzb3J0OiBHbG9iYWxTZWFyY2hTb3J0Qm9keS5wYXJ0aWFsKCksXHJcbiAgcXVlcnk6IEdsb2JhbFNlYXJjaFF1ZXJ5Qm9keS5wYXJ0aWFsKCksXHJcbn0pO1xyXG5cclxuZXhwb3J0IHR5cGUgSUdsb2JhbFNlYXJjaFBhZ2luYXRpb25Cb2R5ID0gei5pbmZlcjxcclxuICB0eXBlb2YgR2xvYmFsU2VhcmNoUGFnaW5hdGlvbkJvZHlcclxuPjtcclxuXHJcbmV4cG9ydCBjb25zdCBHbG9iYWxTZWFyY2hCb2R5ID0gei5vYmplY3Qoe1xyXG4gIHNlYXJjaDogei5zdHJpbmcoKSxcclxuICBwYXRoOiB6LmVudW0oVGFyZ2V0UGF0aEFycmF5KSxcclxufSk7XHJcblxyXG5leHBvcnQgdHlwZSBJR2xvYmFsU2VhcmNoQm9keSA9IHouaW5mZXI8dHlwZW9mIEdsb2JhbFNlYXJjaEJvZHk+O1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQUEsU0FBUyxLQUFBQSxVQUFTOzs7QUNBbEIsU0FBUyxTQUFTO0FBRVgsSUFBTSxhQUFhLE1BQ3hCLEVBQ0csTUFBTSxDQUFDLEVBQUUsUUFBUSxHQUFHLEVBQUUsUUFBUSxNQUFNLEdBQUcsRUFBRSxRQUFRLE9BQU8sQ0FBQyxDQUFDLEVBQzFELFVBQVUsQ0FBQyxVQUFVLFVBQVUsUUFBUSxVQUFVLE1BQU07QUFFckQsSUFBTSxZQUFZLE1BQ3ZCLEVBQ0csTUFBTSxDQUFDLEVBQUUsT0FBTyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFDOUI7QUFBQSxFQUFVLENBQUMsVUFDVixPQUFPLFVBQVUsV0FBVyxTQUFTLEtBQUssSUFBSTtBQUNoRDtBQUVHLElBQU0sVUFBVSxNQUNyQixFQUNHLE1BQU0sQ0FBQyxFQUFFLEtBQUssR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLEVBQzVCO0FBQUEsRUFBVSxDQUFDLFVBQ1YsT0FBTyxVQUFVLFdBQVcsSUFBSSxLQUFLLEtBQUssSUFBSTtBQUNoRDtBQUdHLElBQU0saUJBQWlCLEVBQUUsT0FBTztBQUFBLEVBQ3JDLE1BQU0sRUFBRSxPQUFPO0FBQUEsRUFDZixPQUFPLEVBQUUsT0FBTztBQUFBLEVBQ2hCLFFBQVEsRUFBRSxRQUFRO0FBQUEsRUFDbEIsY0FBYyxFQUFFLFFBQVE7QUFBQSxFQUN4QixNQUFNLEVBQUUsSUFBSTtBQUFBLEVBQ1osT0FBTyxFQUFFLElB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QSxFQUN2QyxPQUFPLFVBQVUsRUFBRSxTQUFTO0FBQUEsRUFDNUIsTUFBTUEsSUFBRSxPQUFPLEVBQUUsU0FBUztBQUFBLEVBQzFCLFNBQVNBLElBQUUsUUFBUSxFQUFFLFNBQVM7QUFBQSxFQUM5QixNQUFNLFVBQVUsRUFBRSxTQUFTO0FBQUEsRUFDM0IsV0FBV0EsSUFBRSxPQUFPLEVBQUUsU0FBUztBQUFBLEVBQy9CLGFBQWFBLElBQUUsT0FBTyxFQUFFLFNBQVM7QUFDbkMsQ0FBQzs7O0FDdkdELFNBQVMsS0FBQUksV0FBUztBQUVsQixTQUFTLG1CQUFBQyx3QkFBdUI7QUFFekIsSUFBTSx3QkFBd0JDLElBQUUsT0FBTztBQUFBLEVBQzVDLFFBQVFBLElBQUUsT0FBTztBQUFBLEVBQ2pCLE1BQU1BLElBQUUsS0FBS0QsZ0JBQWU7QUFDOUIsQ0FBQztBQUVELElBQU1FLFVBQVEsQ0FBQyxNQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxDQUFDO0FBQy9DLElBQU1DLGFBQVc7QUFDVixJQUFNLHVCQUF1QkYsSUFBRSxPQUFPO0FBQUEsRUFDM0MsVUFBVUEsSUFBRSxPQUFPLEVBQUUsT0FBT0MsU0FBT0MsVUFBUTtBQUFBLEVBQzNDLFFBQVFGLElBQUUsT0FBTyxFQUFFLE9BQU9DLFNBQU9DLFVBQVE7QUFDM0MsQ0FBQztBQUVNLElBQU0sNkJBQTZCLGVBQWUsT0FBTztBQUFBLEVBQzlELE1BQU0scUJBQXFCLFFBQVE7QUFBQSxFQUNuQyxPQUFPLHNCQUFzQixRQUFRO0FBQ3ZDLENBQUM7QUFNTSxJQUFNLG1CQUFtQkYsSUFBRSxPQUFPO0FBQUEsRUFDdkMsUUFBUUEsSUFBRSxPQUFPO0FBQUEsRUFDakIsTUFBTUEsSUFBRSxLQUFLRCxnQkFBZTtBQUM5QixDQUFDOyIsCiAgIm5hbWVzIjogWyJ6IiwgInoiLCAieiIsICJ6IiwgInoiLCAieiIsICJ6IiwgInoiLCAieiIsICJ6IiwgIlRhcmdldFBhdGhBcnJheSIsICJ6IiwgImNoZWNrIiwgImNoZWNrRXJyIiwgInoiLCAiVGFyZ2V0UGF0aEFycmF5IiwgInoiLCAiVGFyZ2V0UGF0aEFycmF5IiwgInoiLCAiY2hlY2siLCAiY2hlY2tFcnIiLCAieiIsICJjaGVjayIsICJjaGVja0VyciIsICJUYXJnZXRQYXRoQXJyYXkiLCAieiIsICJjaGVjayIsICJjaGVja0VyciIsICJ6IiwgImNoZWNrIiwgImNoZWNrRXJyIiwgInoiLCAieiIsICJjaGVjayIsICJjaGVja0VyciIsICJ6IiwgInoiLCAiY2hlY2siLCAiY2hlY2tFcnIiLCAieiIsICJ6IiwgImNoZWNrIiwgImNoZWNrRXJyIiwgInoiLCAieiIsICJjaGVjayIsICJjaGVja0VyciIsICJNZWRpYUdlbnJlc0FycmF5IiwgIk1lZGlhUGFyZW50TGFiZWxBcnJheSIsICJNZWRpYVNvdXJjZUFycmF5IiwgIk1lZGlhU3RhdHVzQXJyYXkiLCAieiIsICJjaGVjayIsICJjaGVja0VyciIsICJ6IiwgInoiLCAieiIsICJ6IiwgInoiLCAiVGFyZ2V0UGF0aEFycmF5IiwgInoiLCAieiIsICJUYXJnZXRQYXRoQXJyYXkiLCAiUGF0Y2hTdGF0dXNBcnJheSIsICJQYXRjaFR5cGVBcnJheSIsICJUYXJnZXRQYXRoQXJyYXkiLCAieiIsICJ6IiwgIlRhcmdldFBhdGhBcnJheSIsICJQYXRjaFN0YXR1c0FycmF5IiwgIlBhdGNoVHlwZUFycmF5IiwgIlVzZXJSb2xlc0FycmF5IiwgInoiLCAieiIsICJVc2VyUm9sZXNBcnJheSIsICJjaGVjayIsICJjaGVja0VyciIsICJ6IiwgIlRhcmdldFBhdGhBcnJheSIsICJ6IiwgImNoZWNrIiwgImNoZWNrRXJyIl0KfQo=
