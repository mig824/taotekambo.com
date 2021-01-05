exports.onCreatePage = ({ page, actions: { createPage, deletePage } }) => {
  if (page.path === '/ceremonies/') {
    const date = new Date();
    const year = date.getFullYear();
    let month = date.getMonth().toString();
    let day = date.getDate().toString();

    if (Number(month) < 9) {
      month = `0${Number(month) + 1}`;
    } else {
      month = `${Number(month) + 1}`;
    }

    if (Number(day) < 10) {
      day = `0${day}`;
    }

    deletePage(page);
    createPage({
      ...page,
      context: {
        ...page.context,
        date: `${year}-${month}-${day}`,
      },
    });
  }
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  switch (stage) {
    case 'build-html':
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /react-leaflet|leaflet/,
              use: [loaders.null()],
            },
          ],
        },
      });
      break;
  }
};
