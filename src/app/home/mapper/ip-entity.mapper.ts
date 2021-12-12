import { Injectable } from '@angular/core';
import { IpEntity } from '../models/ip-entity/ip-entity.model';
import { LocationIpEntity } from '../models/ip-entity/location.model';
import { Ip } from '../models/ip.model';

@Injectable({ providedIn: 'root' })
export class IpEntityMapper implements EntityMapper<IpEntity, Ip> {
  locationMapper(location: LocationIpEntity): string {
    const { region, country, postalCode } = location;
    return `${country}, ${region} ${postalCode}`;
  }

  mapToDomain(entity: IpEntity): Ip {
    const {
      ip,
      location: { timezone, lat, lng },
      isp,
    } = entity;
    return {
      v4: ip,
      location: this.locationMapper(entity.location),
      timezone,
      isp,
      coor: { lat, lng },
    };
  }

  mapToEntity(domain: Ip): IpEntity {
    throw new Error('Not implement yet');
  }
}
