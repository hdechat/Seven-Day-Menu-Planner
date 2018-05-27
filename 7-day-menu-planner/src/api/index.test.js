import fetchRecipes from './index.js';
import { paleo } from '../mock-data.js';

describe('Fetch Recipes', () => {
  let mockResults;

  beforeEach(() => {
    mockResults = paleo;
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(mockResults)
    }))
  });

  it('should call fetch with the correct params', () => {
    const expected = "https://api.edamam.com/search?q=paleo&app_id=3ed8819c&app_key=de997af620368eed6dcd7f4f42c179c2";

    fetchRecipes('paleo');

    expect(window.fetch).toHaveBeenCalledWith(expected)
  });

  it('should return an object if the status code is ok', async () => {
    const expected = mockResults;

    await expect(fetchRecipes('paleo')).resolves.toEqual(expected);
  });

  it('should throw an error if the status is code is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({status: 404}));

    const expected = new Error('Error status code 404');

    await expect(fetchRecipes('paleo')).rejects.toEqual(expected);
  });
});