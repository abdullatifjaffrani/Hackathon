export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-17'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'production'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  's7k1b5yz'
)

export const token = assertValue(
  process.env.NEXT_PUBLIC_SANITY_AUTH_TOKEN,
  'skQWIusm27JZTLXzSlqw8aoSCuBX3erQv5Z6hrCo9i1OPyQaAt2WmlhB6lUYs3dLbDffqAjiBQq6to3pDxkYwzDqgyGlwt1iMYvSzIQ1QAmKuFD0Sk6cgzTuFDJDAElJiSb2szoSv72PGck1VSZiO6td2M2uw4gXvRjrnsDEDvZhg16oVaLr'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
