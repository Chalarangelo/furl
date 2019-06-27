import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import '../styles/index.scss';
import { 
  Layout, Header, Sidebar, Content, 
  Menu, MenuItem, 
  Grid, Row, Column as Col,
  Dropdown,
  Image,
  Button,
  Icon,
  Hyperlink
} from '../lib';
import Meta from '../doc_components/Meta';
import HtmlMapper from '../doc_components/HtmlMapper';

const HomePage = (props) => {
  const data = useStaticQuery(graphql`
    query HomeQuery {
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
          author
          social {
            twitter
          }
        }
      }
      post: markdownRemark(frontmatter: { title: { eq: "Home" } }) {
        id
        fields {
          slug
        }
        excerpt(pruneLength: 160)
        html
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          description
        }
      }
    }
  `);
  return(
    <>
      <Meta title='Home' />
      <Layout contentSize={1.0}>
        <Header outline='border-bottom'>
          <Grid>
            <Row paddingHorizontal='ls-50p'>
              <Col size='50px' style={{height: '47px'}}>
                <Hyperlink href='/' style={{border: 'none'}} paddingVertical='1px'>
                  <Image 
                    src={data.logo.childImageSharp.fixed.src} 
                    alt='furl'
                  />
                </Hyperlink>
              </Col>
              <Col />
              <Col size={['calc(91% - 50px)', 'calc(91% - 50px)',6,6]}>
                <Menu type='horizontal' highlight='bottom'>
                  <MenuItem href='#getting-started'>Getting started</MenuItem>
                  <MenuItem href='/design'>Design</MenuItem>
                  <MenuItem href='/components'>Components</MenuItem>
                </Menu>
              </Col>
              <Col size={1} style={{textAlign: 'right'}}>
                <Button 
                  fill='link' type='link'
                  href='https://github.com/Chalarangelo/furl' 
                  target='external' 
                  size='small'
                  marginVertical='calc(var(--ls-25p) + 3.5px)'
                  marginHorizontal='0'
                >
                  <Icon name='github' height={18} width={18}/>
                </Button>
              </Col>
            </Row>
          </Grid>
        </Header>
        <Content>
          <Grid width='100%'>
            <Row>
              <Col />
              <Col size='800px'>
                <HtmlMapper html={data.post.html} />
              </Col>
              <Col />
            </Row>
          </Grid>
        </Content>
      </Layout>
    </>
  )
};

export default HomePage;
