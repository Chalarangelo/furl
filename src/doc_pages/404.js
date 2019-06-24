import React from 'react';
import { graphql } from 'gatsby';

import '../styles/index.scss';
import { 
  Layout, Header, Sidebar, Content, 
  Menu, MenuItem, 
  Grid, Row, Column as Col,
  Dropdown,
  Image,
  Button,
  Icon,
  Title, Paragraph, Text,
  Hyperlink
} from '../lib';
import Meta from '../doc_components/Meta';

const NotFoundPage = (props) => {
    const data = props.data;
    const siteTitle = data.site.siteMetadata.title;

    return(
    <>
      <Meta title='Page not found' />
      <Layout contentSize={1.0}>
        <Header outline='border-bottom'>
          <Grid>
            <Row paddingHorizontal='ls-50p'>
              <Col size='50px' style={{height: '47px'}}>
                <Hyperlink href='/' style={{border: 'none'}} paddingVertical='1px' >
                  <Image 
                    src={data.logo.childImageSharp.fixed.src} 
                    
                    alt='furl'
                  />
                </Hyperlink>
              </Col>
              <Col />
              <Col size={6}>
                <Menu type='horizontal' highlight='bottom'>
                  <MenuItem href='/#getting-started'>Getting started</MenuItem>
                  <MenuItem href='/design'>Design</MenuItem>
                  <MenuItem href='/components'>Components</MenuItem>
                </Menu>
              </Col>
              <Col size={1} style={{textAlign: 'right'}}>
                <Button 
                  fill='link' 
                  href='https://github.com/Chalarangelo/furl' 
                  target='external' 
                  size='small'
                  margin='calc(var(--ls-25p) + 3.5px)'
                >
                  <Icon name='github' height={18} width={18}/>
                </Button>
              </Col>
            </Row>
          </Grid>
        </Header>
        <Content>
          <Title>404 <Text textStyle='small'>Page not found</Text></Title>
          <Paragraph>We suggest that you make your way <Hyperlink href='/'>back home</Hyperlink> and try again...</Paragraph>
        </Content>
      </Layout>
    </>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    logo: file(absolutePath: {regex: "/logo_md.png/"}) {
      id
      childImageSharp {
        fixed(height: 45, width: 45) {
          src
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
