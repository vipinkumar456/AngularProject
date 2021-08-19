import { HttpClient, JsonpClientBackend, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {


tasks:any;
posts:any;
private url = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private http:HttpClient) 
    {
     
    }
    ngOnInit(): void
    {
     this.http.get(this.url)
     .subscribe(response =>
       {
         this.tasks = response; 
         console.log(response );
         console.log(this.tasks);
       
       }
 
     )
    }
    createPost(input:HTMLInputElement)

    {
   let post:any ={title:input.value}
   console.log(post);
    input.value='';
      this.http.post(this.url,JSON.stringify(post))
      .subscribe(response =>
        {
       post.id=response;
       console.log(response+'v');
    
       this.tasks.splice(0, 0,post);
          console.log(response);  
        
        })
    }
    updatePost(task:any)
    {
        console.log(task);
        console.log(task.body);
        this.http.patch(this.url+'/'+task.id,JSON.stringify({isRead:true}))
        .subscribe(response=>
          {
            console.log(response);
          });
    }
    DeletePost(task:any)
    {
        
      console.log("vipin");
      console.log(task);
        this.http.delete(this.url+'/'+task.id)
        .subscribe(response=>
          {
            let index=this.tasks.indexOf(task);
            console.log(index);
            this.tasks.splice(index,1);
            console.log(response);
          }); 
    }


}
