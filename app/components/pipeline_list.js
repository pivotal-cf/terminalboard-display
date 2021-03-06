const React = require('react');
const Pipeline = require('./pipeline');
const Gif = require('./gif');
const types = React.PropTypes;

class PipelineList extends React.Component {
  static propTypes = {
    pipelines: types.array.isRequired
  };

  render() {
    const {pipelines} = this.props;

    const pipelinesList = pipelines.filter((item) => (
      item.pipelineStatus !== 'success' || item.currentlyRunning
    )).map((item, index) => (
      <Pipeline pipelineName={item.pipelineName} pipelineStatus={item.pipelineStatus} currentlyRunning={item.currentlyRunning} url={item.url} key={index}/>
    ));

    if (pipelinesList.length === 0) {
      return <Gif />
    } else {
      return (
        <ul className="pipeline-list">
          {pipelinesList}
        </ul>
      );
    }
  }
}

module.exports = PipelineList;
