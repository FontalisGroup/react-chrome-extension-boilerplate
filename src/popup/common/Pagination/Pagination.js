import React from 'react';
import PropTypes from 'prop-types';
import { filterValidPages, getVisiblePages } from '../../../util/helpers';

const defaultButton = props => <button {...props}>{props.children}</button>;

class Pagination extends React.Component {
  constructor(props) {
    super();

    this.state = {
      visiblePages: getVisiblePages(null, props.pages)
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.pages !== nextProps.pages) {
      this.setState({
        visiblePages: getVisiblePages(null, nextProps.pages)
      });
    }

    this.changePage(nextProps.page + 1);
  }

  changePage = page => {
    const activePage = this.props.page + 1;

    if (page === activePage) {
      return;
    }

    const visiblePages = getVisiblePages(page, this.props.pages);

    this.setState({
      visiblePages: filterValidPages(visiblePages, this.props.pages)
    });

    this.props.onPageChange(page - 1);
  };

  render() {
    const { PageButtonComponent = defaultButton, pages } = this.props;
    const { visiblePages } = this.state;
    const activePage = this.props.page + 1;

    return (
      pages > 1 && (
        <div>
          <PageButtonComponent
            onClick={() => {
              if (activePage === 1) return;
              this.changePage(activePage - 1);
            }}
            disabled={activePage === 1}
          >
            &lt;
          </PageButtonComponent>
          {visiblePages.map(page => {
            return (
              <PageButtonComponent key={page} onClick={this.changePage.bind(null, page)}>
                {page}
              </PageButtonComponent>
            );
          })}
          <PageButtonComponent
            onClick={() => {
              if (activePage === this.props.pages) return;
              this.changePage(activePage + 1);
            }}
            disabled={activePage === this.props.pages}
          >
            &gt;
          </PageButtonComponent>
        </div>
      )
    );
  }
}

Pagination.propTypes = {
  pages: PropTypes.number,
  page: PropTypes.number,
  PageButtonComponent: PropTypes.node,
  onPageChange: PropTypes.func
};

export default Pagination;
