import { AnimeListDataItemResponseType } from "@/types/AnimeList";

export default ({ id, title, description, startDate, status, coverImage }: AnimeListDataItemResponseType) => ({
  id,
  status,
  description,
  title: title.romaji,
  releaseDate: (startDate.day > 9 ? startDate.day  : "0"+startDate.day)+"/"+startDate.month+"/"+startDate.year,
  coverImage: coverImage.medium
})