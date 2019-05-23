import ApiPlanetPage from '../Page/ApiPlanetPage'

describe('Planet Instance', () => {
  it('Api Planet', () => {
    const planet = new ApiPlanetPage();
    planet.visitApiPlanet();
    planet.validateApiPlanetStatus();
    planet.validateApiPlanetFields();
  });
});