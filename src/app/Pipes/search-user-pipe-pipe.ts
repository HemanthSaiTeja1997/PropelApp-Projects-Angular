import { Pipe, PipeTransform } from '@angular/core';
import { Iuser } from '../Interface/iuser';

@Pipe({
  name: 'searchUserPipe'
})
export class SearchUserPipePipe implements PipeTransform {

transform(users: Iuser[], searchTerm: string): Iuser[] {
    if (!users || !searchTerm) return users;
    const lowerTerm = searchTerm.toLowerCase();
    return users.filter(user =>
      user.name.toLowerCase().startsWith(lowerTerm)
    );
  }

}
