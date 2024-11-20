import { Pipe, PipeTransform } from '@angular/core';
import {Team} from "../interFaces/team";

@Pipe({
  name: 'favTeam',
  standalone: true
})
export class FavTeamPipe implements PipeTransform {

  transform(team: String): string | undefined{
    if(team == "Barcelona"){
      return "Barcelona is BEST TEAM";
    }
    else{
      return
    }
  }

}
