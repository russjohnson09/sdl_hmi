/*
 * Copyright (c) 2013, Ford Motor Company All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met: ·
 * Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer. · Redistributions in binary
 * form must reproduce the above copyright notice, this list of conditions and
 * the following disclaimer in the documentation and/or other materials provided
 * with the distribution. · Neither the name of the Ford Motor Company nor the
 * names of its contributors may be used to endorse or promote products derived
 * from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */
/**
 * @name SDL
 * @desc flags for application flags used for diffeerent configurations of
 *       application As the same code base is used fro Production and RnD work
 *       pakackages, it is necessary to configare application for different
 *       needs/releases It is NOT recommended to extend this object with new
 *       flags. Each modification should be discussed with PM in advance
 * @category Application
 * @filesource app/AppFlags.js
 * @version 1.0
 */

let urlParams = new URLSearchParams(window.location.search);

console.log(`urlParams`, urlParams);



//master
//http://sdl_hmi.localhost/?WEBSOCKET_URL=ws://192.168.1.57:8088
//app tcp 192.168.1.57:12346




let flags = {
    /**
     * Set language for localization
     */
    SET_LOCALIZATION: 'eng',

    //core-broker or direct core ws connection.
    WEBSOCKET_URL: 'ws://192.168.1.57:8088',

    //python simple rpc client...
    PYTHON_SERVER_URL: 'ws://core.core:8081',
    //
    CAN_WEBSOCKET_URL: 'ws://core.core:2468',
    TOUCH_EVENT_STARTED: false,
    BasicCommunication: null,
    UI: null,
    VehicleInfo: null,
    VR: null,
    Buttons: null,
    TTS: null,
    Navigation: null,
    CAN: null,
    RC: null,
    steeringWheelLocation: 'LEFT',
    /**
     * 0 - G
     * 1 - R
     * 2 - P
     */
    SimpleFunctionality: 1,
    ExternalPolicies: false
};

for (let key in flags) {
    console.log(`check key ${key}`);
    let val = urlParams.get(key);
    if (val) {
        console.log(`set key ${key} ${val}`);
        flags[key] = val;
    }
}

// { "type": "services", "data": { "core-broker": "ws://bbi815erqpmcbzea.manticore.localhost:80", "core-tcp": "manticore.localhost:6751", "core-file": "http://t8emdqddtjjv6o04.manticore.localhost:80", "core-log": "ws://7fqd9hkj4pian65l.manticore.localhost:80", "core-policy": "http://y9jlpxh92zp2cs9j.manticore.localhost:80", "hmi-user": "http://1p8oseazmmjmsfhd.manticore.localhost:80" } }

//tcp must be assigned a new port each time unfortunately. used by phones to connect in debug mode.

// { "type": "services", "data": { "core-broker": "ws://99zhddemftsv5nwd.manticore.localhost:80", "core-tcp": "manticore.localhost:7000", "core-file": "http://5i8oynsuvplk5iyr.manticore.localhost:80", "core-log": "ws://sbfy4zrslhzb6u1s.manticore.localhost:80", "core-policy": "http://mjgkf8w98s6b7622.manticore.localhost:80", "hmi-user": "http://6mw4uv7mcgiqityv.manticore.localhost:80" } }
FLAGS = Em.Object.create(
    flags
);
