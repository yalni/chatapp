import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage=(props)=>{
    const chatProps = useMultiChatLogic('3fe74211-c0b0-4100-b1a0-8fc0a20adf18', props.user.username, props.user.secret);
    return <div style={{height: '100vh'}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style={{height: '100%'}}/>
    </div>
}

export default ChatsPage