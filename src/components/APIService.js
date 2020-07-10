const host = `https://wines-api.herokuapp.com`;


export function commentWine(id, content) {
  return fetch(`${host}/api/wines/${id}/comments`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title: 'The title', content })
  });
}

export function fetchComments(id){
  return fetch(`${host}/api/wines/${id}/comments`)
          .then(res => res.json());
}


export async function likeWine(id) {
  let response = fetch(`${host}/api/wines/${id}/like`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ like: true })
  });

  let result = await response;
  return result;
}

export function unlikeWine(id) {
  return fetch(`${host}/api/wines/${id}/like`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ like: false})
  });
}

export function isWineLiked(id) {
  return fetch(`${host}/api/wines/${id}/like`)
          .then(res => res.json());
}



export function fetchRegions() {
  return fetch(`${host}/api/regions`)
          .then(res => res.json());
}

export function fetchWinesFrom(region) {
  return fetch(`${host}/api/wines?region=${region}`)
          .then(res => res.json());
}

export function fetchWine(id) {
  return fetch(`${host}/api/wines/${id}`)
          .then(res => res.json());
}