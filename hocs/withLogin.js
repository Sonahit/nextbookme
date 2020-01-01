export default function withLogin(Page) {
  const page = props => {
    return <Page {...props} />;
  };
  page.getInitialProps
    ? page
    : (page.getInitialProps = async ctx => {
        return {
          isSigned: false
        };
      });
  return page;
}
