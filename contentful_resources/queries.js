const queries = {
  home: `query homepage {
      homepageCollection(limit: 1) {
        items {
          path
          title
          headerTitle
          headerSubTitle
          headerBackground {
            title
            description
            contentType
            fileName
            size
            url
            width
            height
          }
        }
      }
    }`,
  about: `query about {}`
}

export default queries