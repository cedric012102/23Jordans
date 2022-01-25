// generate a random number between given min and max numbers
const generateRandomNo = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// generate 6 random sneakers to display on landing page
export async function generateSixRandom() {
  const promises = [1, 2, 3, 4, 5, 6].map(async () => {
    const req = await fetch(
      `https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=%3CREQUIRED%3E/${generateRandomNo(
        1,
        731,
      )}`,
    ).catch(respError => {
      console.error('Error:', respError);
    });
    return req.json();
  });
  const data = await Promise.all(promises);
  return data;
}

// search one sneaker by name
export async function searchHero(sneakerName) {
  const req = await fetch(
    `https://the-sneaker-database.p.rapidapi.com/search?limit=%3CREQUIRED%3E/${sneakerName}`,
  )
    .then(resp => resp.json())
    .catch(respError => {
      console.error('Error:', respError);
    });
  const data = await Promise.resolve(req);
  return data;
}
