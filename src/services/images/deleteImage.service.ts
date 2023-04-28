import AppDataSource from "../../data-source";

export const deleteImageService = async (id: string) => {
  const imageRepository = AppDataSource.getRepository(Image);

  const image = await imageRepository.findOneBy({
    id: id,
  });

  await imageRepository.remove(image);

  return {};
};
