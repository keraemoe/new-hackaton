import React from 'react';
import './Chat.module.css'
import Navbar from './Navbar';

const Chat = () => {
    return (
        <div id='chat'>
            <Navbar />
            <body class="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-100 text-gray-800 p-10">
                <div class="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden">
                    <div class="flex flex-col flex-grow h-0 p-4 overflow-auto">
                        <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                            <div>
                                <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                                    <p class="text-sm">Как получить патент?</p>
                                </div>
                                <span class="text-xs text-gray-500 leading-none">2 min ago</span>
                            </div>
                            <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                        </div>
                        <div class="flex w-full mt-2 space-x-3 max-w-xs">
                            <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                            <div>
                                <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                                    <p class="text-sm">Вы должны обратиться в ЦОН на месте постоянного проживания и предоставить следующие документы:

                                        1. Заявление на получение патента.
                                        2. Копия паспорта или другого документа, удостоверяющего личность заявителя.
                                        3. Копия документа, подтверждающего образование или квалификацию заявителя.
                                        4. Документы, подтверждающие опыт работы по соответствующей специальности.
                                        5. Документ, подтверждающий уплату государственной пошлины за выдачу патента.</p>
                                </div>
                                <span class="text-xs text-gray-500 leading-none">2 min ago</span>
                            </div>
                        </div>
                        {/* <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                            <div>
                                <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                                    <p class="text-sm">Lorem ipsum dolor sit.</p>
                                </div>
                                <span class="text-xs text-gray-500 leading-none">2 min ago</span>
                            </div>
                            <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                        </div> */}
                    </div>

                    <div class="flex bg-gray-300 p-4">
                        <input class="flex items-center h-10 w-full rounded px-3 text-sm" type="text" placeholder="Type your message…" />
                        <button class="bg-blue-300">Send</button>
                    </div>
                </div>
            </body>
        </div>
    );
};

export default Chat;