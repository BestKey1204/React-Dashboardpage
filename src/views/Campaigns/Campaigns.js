import React, { Component } from 'react';
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Progress } from 'reactstrap';

class Campaigns extends Component {
  constructor(props) {
    super(props);
    this.messages = [{
      title: 'Text',
      content: `This is a test sdfasfsdfa dsfas a dsa rfefs a fas a 3sa qrf ds  fdgvdf asdf lf jsd;l `,
      deliveredRate: 0,
      successRate: 30,
      optOuts: 3,
      totalSent: 5
    },{
      title: 'Text12',
      content: `bbbbbbbbbsd sdfsdf sdfasfsdfa dsfas a dsa rfefs a fas a 3sa qrf ds  fdgvdf asdf lf `,
      deliveredRate: 3,
      successRate: 10,
      optOuts: 0,
      totalSent: 0
    }]
    this.state = {
      dropdownOpen: false,
      selected_message_number: 0,
      sortItem: 'All'
    }
  }
  toggle() {
    this.setState({ dropdownOpen: !this.state.dropdownOpen})
  }
  selectedMessage() {
    return this.messages[this.state.selected_message_number];
  }
  selectMessage(index) {
    this.setState({selected_message_number: index})
  }
  render() {
    var { messages } = this;
    var selectedMessage = this.selectedMessage();
    var { selected_message_number } = this.state;
    return (
      <div id="Campaigns">
        <div className="message-list-container">
          <div className="control-container">
            <Button className="st-button st-button--primary st-m-r-8 st-js-new-campaign"><i><img alt="campaigns" src="assets/img/icons/plus.png" style={{width: 12, marginRight: 10 }}/></i><span>New Campaign</span></Button>
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={() => {this.toggle();}}>
              <DropdownToggle caret>
                {this.state.sortItem}
              </DropdownToggle>
              <DropdownMenu>  
                <DropdownItem onClick={e => {this.setState({sortItem: e.target.innerHTML})}}>All</DropdownItem>
                <DropdownItem onClick={e => {this.setState({sortItem: e.target.innerHTML})}}>Action</DropdownItem>
                <DropdownItem onClick={e => {this.setState({sortItem: e.target.innerHTML})}}>Another</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </div>
          <div className="message-list">
            {messages.map((message, index) => {
              return <div
                className={"message-item " + (selected_message_number === index ? 'selected' : '')}
                key={"message_" + index}
                onClick={() => {this.selectMessage(index)}}
              >
                <div className="title-bar">
                  <div className="message-title">{message.title}</div>
                  <div className="message-date"><img alt="campaigns" src="/assets/img/icons/check.png" style={{width: 11, marginRight:5}}/>Jan 22</div>
                </div>
                <div className="message-simple">{message.content}</div>
              </div>
            })}
          </div>
        </div>
        {
          selectedMessage ? 
          <div className="message-container">
            <div className="message-status-bar">
              <span><img alt="campaigns" src="/assets/img/icons/check.png" style={{width: 11}}/> Sent on Jan 22 1:08 pm</span>
            </div>
            <div className="message-panel">
              <div className="message-control-bar">
                <div style={{display: 'flex', alignItems:'center'}}>
                  <img alt="campaigns" src="/assets/img/icons/chat.png" style={{width: 20}}/>
                  <span style={{paddingLeft: 4}}><b>SMS</b></span>
                </div>
                <div className="message-control-items">
                  <span><i className="fa fa-clone"></i></span>
                  <span><i className="cui-trash icons"></i></span>
                </div>
              </div>
              <div><b>Sent to</b> {selectedMessage.totalSent} contacts</div>
              <div className="message-title"><span>{selectedMessage.title}</span></div>
              <div><b>Message</b></div>
              <div className="message-content">
                {selectedMessage.content}
              </div>
              <div><b>Aanlytics</b></div>
              <div className="message-analytics-content">
                <div>
                  <span>Total Sent</span>
                  <span className="message-totalsent">{selectedMessage.totalSent}</span>
                </div>
                <div>
                  <span>Opt-outs</span>
                  <span className="message-totalsent">{selectedMessage.optOuts}</span>
                </div>
              </div>
              <div style={{display: 'flex', alignItems: 'center', fontWeight: 300}}>
                <b>Success rate: <span>{selectedMessage.successRate}</span>% </b>
                <img alt="campaigns" src="/assets/img/icons/info.png" style={{width: 18, marginLeft: 10, marginRight: -2}}/>
              </div>
              <div className="message-progress-bar">
                <Progress value={selectedMessage.successRate}/>
                <div>
                  <span><b>SMS delivered</b></span>
                  <span><b>{selectedMessage.deliveredRate + '%'}</b></span>
                </div>
              </div>
            </div>
          </div> : 
          <div></div>
        }
      </div>
    );
  }
}

export default Campaigns;
