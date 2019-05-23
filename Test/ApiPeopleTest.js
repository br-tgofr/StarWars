import ApiPeoplePage from '../Page/ApiPeoplePage'

describe('People Instance', () => {
  it('Api People', () => {
    const people = new ApiPeoplePage();
    people.validateApiPeopleUrl();
    people.validateApiPeopleStatus();
    people.validateApiPeopleFields();
  });
});