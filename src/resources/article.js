import { createResource } from 'redux-rest-resource'

export const { types, actions, reducers } = createResource(
  {
    name: 'article',
    url: `${window.location.origin}/api/articles/:id`
  }
);
