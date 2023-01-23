export const getComments = async () => {
  return [
    {
      id: "1",
      body: "First comment",
      username: "Test1",
      userId: "1",
      parentId: null
    },
    {
      id: "2",
      body: "Second comment",
      username: "Test2",
      userId: "2",
      parentId: null
    },
    {
      id: "3",
      body: "First comment first child",
      username: "Test3",
      userId: "2",
      parentId: "1"
    },
    {
      id: "4",
      body: "Second comment second child",
      username: "Test4",
      userId: "2",
      parentId: "2"
    }
  ];
};

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "Kislay"
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
