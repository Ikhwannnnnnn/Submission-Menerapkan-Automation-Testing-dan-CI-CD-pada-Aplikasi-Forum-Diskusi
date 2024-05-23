import React from "react";
import PropTypes from "prop-types";
import postedAt from "../../utils/index";

function ThreadCommentItem({ content, createdAt, owner }) {
  // eslint-disable-next-line no-console
  console.log({ owner });
  return (
    <div>
      <div>
        <div className="flex items-center gap-1">
          <img className="w-8 rounded-full" src={owner.avatar} alt="avatar" />
          <p className="font-medium">{owner.name}</p>
        </div>
      </div>
      {/* eslint-disable-next-line react/no-danger */}
      <p dangerouslySetInnerHTML={{ __html: content }} className="mt-2" />
      <div className="flex justify-end">
        <p>{postedAt(createdAt)}</p>
      </div>
    </div>
  );
}

const ownerShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const threadCommentItemShape = {
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
};

ThreadCommentItem.propTypes = {
  ...threadCommentItemShape,
};

export { threadCommentItemShape };

export default ThreadCommentItem;
