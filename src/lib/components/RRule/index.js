import React from 'react';
import PropTypes from 'prop-types';
import CopyToClipboard from 'react-copy-to-clipboard';

const RRule = ({ rrule, isCopied, handleCopy }) => (
  <div className="container">
    <div className="form-group row d-flex align-items-sm-center">

      <div className="col-sm-2 text-sm-right">
        <label className="col-form-label">
          <strong>
            RRule
          </strong>
        </label>

      </div>
      <div className="col-sm-8">
        <div style={{ overflowX: 'scroll' }}>
          <code >
            {rrule}
          </code>
        </div>
      </div>

      <div className="col-sm-1">
        <CopyToClipboard
          text={rrule}
          onCopy={handleCopy}
        >
          <button
            className={isCopied ? 'btn btn-secondary' : 'btn btn-primary'}
            onClick={handleCopy}
          >
            {isCopied ? 'Copied' : 'Copy'}
          </button>
        </CopyToClipboard>
      </div>

    </div>
  </div>
);

RRule.propTypes = {
  rrule: PropTypes.string.isRequired,
  isCopied: PropTypes.bool.isRequired,
  handleCopy: PropTypes.func.isRequired,
};

export default RRule;
