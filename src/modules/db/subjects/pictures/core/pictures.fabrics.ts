import { IPicture, Picture } from './pictures.classes'
import { IPictureDto } from './pictures.dto'

export function create (dto: Partial<IPictureDto>): IPicture {
  return new Picture({
    title: '',
    url: '',
    size: '',
    group: '',
    description: '',
    markers: [],
    ...dto,
  })
}

export function clone (picture: IPicture): IPicture {
  return new Picture({ ...picture.dto })
}
