export interface EntityMapper<Entity, Domain> {
  mapToDomain(entity: Entity): Domain;
  mapToEntity(domain: Domain): Entity;
}
