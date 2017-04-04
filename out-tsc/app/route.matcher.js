/**
 * This code has been written by Denis Shavenzov
 * If you have any questions or notices you can contact me by email shavenzov@gmail.com
 */
import { UrlSegment } from "@angular/router";
import { FreeSoundSortTypes } from "./constants";
import { environment } from "../environments/environment";
/**
 * :query/:sort/:page/:pageSize
 * @param segments
 * @param segmentGroup
 * @param route
 * @returns UrlMatchResult
 */
export function mainPageMatcher(segments, segmentGroup, route) {
    //Max count of params is 4
    if (segments.length > 4) {
        return null;
    }
    var consumed = (segments.length == 0) ? [new UrlSegment("", null)] : segments;
    var posParams = {};
    //Query param
    if (segments.length > 0) {
        posParams['query'] = segments[0];
    }
    //Checking sort param
    if (segments.length > 1) {
        if (FreeSoundSortTypes.indexOf(segments[1].path) == -1) {
            return null;
        }
        posParams['sort'] = segments[1];
    }
    //Checking page param
    if (segments.length > 2) {
        //page должен быть целым положительным числом
        if (!new RegExp('^\\d+$').test(segments[2].path)) {
            return null;
        }
        posParams['page'] = segments[2];
    }
    //Checking pageSize param
    if (segments.length > 3) {
        var pageSize = parseInt(segments[3].path);
        var valid = !isNaN(pageSize) &&
            (pageSize >= environment.freeSoundAPIEnvironment.defaultPageSize) &&
            (pageSize <= environment.freeSoundAPIEnvironment.maximumPageSize);
        if (!valid) {
            return null;
        }
        posParams['pageSize'] = segments[3];
    }
    return { consumed: consumed, posParams: posParams };
}
//# sourceMappingURL=F:/server/projects/Angular-2/free-sound-client/src/app/route.matcher.js.map