import React from 'react'

import KeywordsConsole from './KeywordsConsole'
import QueriesBoard from './QueriesBoard'
import Graph from './Graph'
import './ChatbotDashboard.css'

function ChatbotDashboard() {
    return (
        <div className="chatbotDashboard">
            <KeywordsConsole />
            <QueriesBoard />
            <Graph />
        </div>
    )
}

export default ChatbotDashboard
