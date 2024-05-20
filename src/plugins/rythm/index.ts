/*
 * Vencord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "Rythm",
    description: "Rythn Hackass Unlock!!!",
    authors: [Devs.DzikStar],
    patches: [
        {
            // remove the errors
            find: "RPCCloseCodes.INVALID_ORIGIN},\"Invalid Origin\"",
            all: true,
            replacement: {
                match: /throw new \w+\.default\({closeCode:\w+\.RPCCloseCodes\.INVALID_ORIGIN},"Invalid Origin"\)/g,
                replace: "console.log(\"saved from rpc error\")"
            }
        }
    ]
});