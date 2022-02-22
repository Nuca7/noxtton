const baseUrl = "https://api.github.com";

export async function getRepositories(search, page) {
  const url = `${baseUrl}/search/repositories?q=${search}&per_page=20&page=${page}`;
  const response = await fetch(url);
  return await response.json();
}

export async function getRepository(user, repositoryName) {
  const url = `${baseUrl}/repos/${user}/${repositoryName}`;
  const response = await fetch(url);
  return await response.json();
}

export async function getUsedLanguages(user, repositoryName) {
  const url = `${baseUrl}/repos/${user}/${repositoryName}/languages`;
  const response = await fetch(url);
  const data = await response.json();
  return Object.keys(data).join(", ");
}

export async function getContributors(user, repositoryName) {
  const url = `${baseUrl}/repos/${user}/${repositoryName}/contributors`;
  const response = await fetch(url);
  return await response.json();
}
