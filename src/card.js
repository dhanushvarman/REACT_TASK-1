export default function Card(data){
    return <>
        <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">{data.card.name}</h5>
                        <h6 className="card-price text-center">${data.card.price}<span className="period">/month</span></h6>
                        <hr/>
                        <ul className="fa-ul">
                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Single User</li>
                        <li><span className="fa-li"><i className="fas fa-check"></i></span>5GB Storage</li>
                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
                        {
                            data.card.prices.map((item)=>{
                                var a = item.value;
                                if(a==0){
                                    return <>
                                        <div style={{marginTop:"18px"}} className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>&#10008;<span style={{marginLeft:"20px"}}>Unlimited Private Projects</span></div>
                                        <div style={{marginTop:"18px"}} className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>&#10008;<span style={{marginLeft:"20px"}}>Dedicated Phone Support</span></div>
                                        <div style={{marginTop:"18px"}} className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>&#10008;<span style={{marginLeft:"20px",marginTop:"30px"}}>Free Subdomain</span>
                                        </div>
                                        <div style={{marginTop:"18px"}} className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>&#10008;<span style={{marginLeft:"20px"}}>Monthly Status Reports</span></div>
                                    </>
                                }else if(a==9){
                                    return <>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Private Projects</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Dedicated Phone Support</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Free Subdomain</li>
                                        <div style={{marginTop:"18px"}} className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>&#10008;<span style={{marginLeft:"20px"}}>Monthly Status Reports</span></div>
                                            
                                    </>
                                }else{
                                    return <>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Private Projects</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Dedicated Phone Support</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>Unlimited</strong> Free
                                            Subdomains</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Monthly Status Reports</li>
                                    </>
                                }
                            })
                        }
                        </ul>
                        <div className="d-grid">
                            <a href="#" className="btn btn-primary text-uppercase">Button</a>
                        </div>
                </div>
            </div>
        </div>
    </>
}

