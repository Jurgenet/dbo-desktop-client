import { IMarkerDto, markersStyleUtils } from '@/modules/db/markers'

export interface IMarker {
  _id: string
  dto: IMarkerDto
}

export enum IMarkerGroups {
  NA = 'na',
  Personal = 'personal',
  Dev = 'dev',
}

export interface IMarkerStyles {
  textColor: string
  bgColor: string
}

export interface IMarkerCssStyles {
  color: string
  backgroundColor: string
}

export class Marker {
  _id: string
  dto: IMarkerDto

  constructor (dto: IMarkerDto) {
    this._id = dto._id
    this.dto = dto
  }

  get styles (): IMarkerStyles {
    const { textColor, bgColor } = this.dto

    return markersStyleUtils.getInheritanceStyles({ textColor, bgColor }, this.dto.ancestor)
  }

  get cssStyles () {
    const { textColor: color, bgColor: backgroundColor } = this.styles

    return { color, backgroundColor }
  }
}
