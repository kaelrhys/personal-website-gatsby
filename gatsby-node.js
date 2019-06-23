/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// https://www.gatsbyjs.org/docs/debugging-html-builds/#fixing-third-party-modules

const path = require('path');

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {

  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@fonts': path.resolve(__dirname, 'src/fonts'),
        '@images': path.resolve(__dirname, 'src/images'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@styles': path.resolve(__dirname, 'src/styles'),
      },
    },
  });
};

exports.createPages = async ({ graphql, actions }) => {

  const { createPage } = actions

  const pages = await graphql(`
    {
      allPrismicProject {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `)

  const template = path.resolve("src/templates/project.jsx")

  pages.data.allPrismicProject.edges.forEach(edge => {
    createPage({
      path: `/project/${edge.node.uid}`,
      component: template,
      context: {
        uid: edge.node.uid,
      },
    })
  })

}