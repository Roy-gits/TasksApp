import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

export class Interceptor implements HttpInterceptor {

  intercept(req:HttpRequest<any>, next:HttpHandler){
    const httpreq  = req.clone({
      headers : req.headers.set("content-type", "application/json")
    })
    console.log(httpreq);
    return next.handle(req);
  }
}
