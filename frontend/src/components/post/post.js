import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import {
    ArrowDownwardOutlined,
    ArrowUpwardOutlined,
    ChatBubbleOutline,
    MoreHorizOutlined,
    RepeatOneOutlined,
    ShareOutlined,
} from "@material-ui/icons";
import "../post/post.css";
import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

function Post() {

    const [IsModalOpen, setIsModalOpen] = useState(false);
    const onOpenModal = () => setIsModalOpen(true);
    const onCloseModal = () => setIsModalOpen(false);

    return (
        <div className="post">
            <div className="post_info">
                <Avatar />
                <h4>user name</h4>
                <small>Timestamp</small>
            </div>
            <div className="post_body">
                <div className="post_question">
                <p>This is test question</p>
                <button onClick={onOpenModal} className="post_btnAnswer">Answer</button>
                    <Modal open={IsModalOpen} onClose={onCloseModal} center>
                        <div className="post_modal ">
                        <Avatar/>
                        <h5>username</h5>
                    </div>
                    <div className="modal_question">
                        <h1>write your question</h1>
                            <p>asked by {""}</p><span>  </span>{""}on {""}timestamp
                    </div>
                    <div className="modal_answer">
                        <ReactQuill placeholder="write your answer here"/>
                    </div>
                        <div className="modal_buttons fixed-bottom d-flex justify-content-end">

                            <button type="button" class="btn btn-danger mx-2" onClick={onCloseModal}>Cancel</button>
                            <button type="submit" class="btn btn-primary mx-2">Add question</button>
                        </div>
                </Modal>
            </div>
            </div>
                <div className="post_footer">
                    <div className="post_footerAction">
                        <ArrowUpwardOutlined />
                        <ArrowDownwardOutlined />
                    </div>
                    <RepeatOneOutlined />
                    <ChatBubbleOutline />


                    <div className="post_footerLeft">
                        <ShareOutlined />
                        <MoreHorizOutlined />
                    </div>
                </div>

                <p style={{color:"rgba(0,0,0,0.5)", fontSize: "12px", fontWeight:"bold", margin:"10px 0px "}}>1 Answer</p>

                <div className="post_answer" style={{ margin: "5px 0px 0px 0px", padding: "5px 0px 0px 20px", borderTop: "1px solid lightgray" }}>

                    <div className="post-answer-container">
                        <div className="post-answered">
                            <Avatar />
                            <div className="post-info">
                                <p>username</p>
                                <span>Timestamp</span>
                            </div>
                        </div>
                        <div className="post-answer">This is test answer</div>
                    </div>
                </div>
            
        </div>
    );
}

export default Post;
