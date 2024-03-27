import { Component } from '@angular/core';

@Component({
  selector: 'app-user-my-work',
  templateUrl: './user-my-work.component.html',
  styleUrls: ['./user-my-work.component.scss']
})
export class UserMyWorkComponent {
  work = [
    {
      designation: "Full Stack Developer Intern",
      companyName: "Crayod Market Research Pvt Ltd",
      startDate: Date.UTC(2023, 3),
      endDate: Date.now()
    },
    {
      designation: "Full Stack Developer",
      companyName: "Freelancer(self-employed)",
      startDate: Date.UTC(2022, 2),
      endDate: Date.UTC(2022, 5)
    },
    {
      designation: "Full Stack Developer",
      companyName: "Freelancer(self-employed)",
      startDate: Date.UTC(2021, 1),
      endDate: Date.UTC(2021, 10)
    }
  ]

  projects=[
    {
      name:"",
      description:"",
      githubLink:""
    },
  ]
}
