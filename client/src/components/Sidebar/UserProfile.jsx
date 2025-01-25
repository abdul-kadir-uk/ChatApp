import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import SettingsModal from "../../features/SettingsModal";
import ChatModal from "../../features/ChatModal";

const UserProfile = ({darkMode}) => {

    const [chatModal, setChatModal] = useState(false);
    const [settingsModal, setSettingsModal] = useState(false);

    const openChatModal = () => {
        setChatModal(true);
    };

    const openSettingsModal = () => {
        setSettingsModal(true);
    };


    return (
        <div className={`p-3 border-b bg-white flex items-center justify-between md:p-4 ${darkMode && 'bg-gray-900 text-white'}`}>
            {/* User Avatar */}
            <a href="/login"><div className="flex items-center">
                <img
                    src="https://www.profilebakery.com/wp-content/uploads/2023/03/Profilbild-AI.jpg"
                    alt="User Avatar"
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full"
                />
                <span className="ml-2 md:ml-3 font-semibold text-gray-800 text-sm md:text-base">
                    Uday Kalyan
                </span>
            </div></a>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2 md:space-x-3 text-gray-600">
                <button
                    title="New Chat"
                    className="p-2 hover:bg-gray-200 rounded-full md:p-3"
                >
                    <FontAwesomeIcon icon={faPlus} onClick={openChatModal} size="lg" />
                </button>
                <button
                    title="Settings"
                    className="p-2 hover:bg-gray-200 rounded-full md:p-3"
                >
                    <FontAwesomeIcon icon={faEllipsis} onClick={openSettingsModal} size="lg" />
                </button>
            </div>


            {/* Chat Modal */}
            {chatModal && <ChatModal setChatModal={setChatModal} />}


            {/* Settings Modal */}
            {settingsModal && <SettingsModal setSettingsModal={setSettingsModal} />}


        </div>
    );
};

export default UserProfile;
