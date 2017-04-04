// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production          : false,

  freeSoundAPIEnvironment : {
    key                 : "WAK50VLFe0YuANwlD90nO1Wsbz8YBAjiSDI5EJAk",
    clientId            : "TPWdHfM6iO7kokJRU4hI",
    baseURL             : "//www.freesound.org/apiv2/",
    defaultPageSize     : 15,
    maximumPageSize     : 150,
    defaultSort         : 'score',
    defaultSearchParams : { query : '', page : 1, pageSize : 15, sort : 'score' }
  }

};
