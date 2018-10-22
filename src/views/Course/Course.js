import React from 'react';

import Aside from '../../components/Layout/Aside';
import Index from '../../components/Index';
import Bio from '../../components/Bio';
import Loading from '../../components/Loading';

import { factories } from '../../mdx';

export default class Course extends React.PureComponent {

  state = {
    course: undefined
  }

  componentDidMount() {
    this.setup.apply(this, [this.props.courseSlug, ...(this.props['*'] || '').split('/')]);
  }
 
  setup = (courseSlug, lessonSlug, sectionSlug) => {
    Promise.all([
      import('../../courses/' + courseSlug + '/index.json'),
      import('../../courses/' + courseSlug + '/index.md')
    ]).then(([{ default: course }, { default: content }]) => {
      this.setState({
        content,
        course: {
          ...course,
          index: course.lessons.map(lesson => ({
            ...lesson,
            slug: `${course.slug}/${lesson.slug}`,
            items: lesson.items ? lesson.items.map(sub => ({
              ...sub,
              slug: `${course.slug}/${lesson.slug}/${sub.slug}`,
            })) : []
          }))
        }
      }, () => {
        if (lessonSlug) {
          this.updateSlug(lessonSlug, sectionSlug);
        }        
      });
    });
  }

  updateSlug = (lessonSlug, sectionSlug) => {
    this.setState(({course}) => ({
      content: null,
      course: {
        ...course,
        index: course.index.map(lesson => ({
          ...lesson,
          active: lesson.slug === `${course.slug}/${lessonSlug}`,
          items: lesson.items ? lesson.items.map(sub => ({
            ...sub,
            active: lesson.slug === `${course.slug}/${lessonSlug}` && sub.slug === `${lesson.slug}/${sectionSlug}`
          })) : undefined
        }))
      }
    }), () => {
      const activeLesson = this.state.course.index.find(lesson => lesson.active);
      const activeSection = sectionSlug ? activeLesson.items.find(section => section.active) : activeLesson.items[0];
      const title = this.getTitle();
      this.props.setLayout({
        title: activeLesson.title,
        subtitle: activeSection.title
      });      
      import('../../courses/' + this.props.courseSlug + '/' + activeLesson.directory +'/' + (activeSection.file || 'index.md')).then(data => {
        this.setState({
          content: data.default
        });
      })      
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.courseSlug !== this.props.courseSlug) {
      this.setup.apply(this, [this.props.courseSlug, ...(this.props['*'] || '').split('/')]);
    }
    if (prevProps['*'] !== this.props['*']) {
      this.updateSlug.apply(this, (this.props['*'] || '').split('/'))
    }
  }

  getTitle() {
    const title = {
      base: this.state.course.title
    };

    const activeLesson = this.state.course.index.find(item => item.active);
    if (activeLesson) {
      title.lesson = activeLesson.title;

      const activeSection = activeLesson.items.find(item => item.active);
      if (activeSection) {
        title.section = activeSection.title;
      }
    }

    return title;
  }

  render() {
    const padding = 150;

    if (this.state.course === undefined) {
      return <Loading />;
    }

    const Content = this.state.content;

    return (
      <React.Fragment>
        <Aside aside={
          <React.Fragment>
            <Index
              index={this.state.course.index}
              padding={padding}
            />
            <Bio />
          </React.Fragment>} 
        >      
          {this.state.content ? <Content factories={factories} /> : <Loading />}
        </Aside>       
      </React.Fragment>
    );
  }
}