const fetch = require("node-fetch");

export default function withLogin(Page) {
  const page = props => {
    return <Page {...props} />;
  };
  page.getInitialProps
    ? page
    : (page.getInitialProps = async ctx => {
        const resp = await fetch(`http://localhost:3000/api/v1/login`);
        if (resp.status === 200) {
          return {
            isSigned: true
          };
        }
        return {
          isSigned: false
        };
      });
  return page;
}
