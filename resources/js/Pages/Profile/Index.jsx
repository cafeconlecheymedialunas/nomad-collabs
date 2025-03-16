import { Head } from "@inertiajs/react";


export default function Index({ freelancers }) {

    return (
            <>
            <Head title="Freelancers" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                  {freelancers && freelancers.map((freelancer)=>{
                  <div>{freelancer.id}</div>
                  })}
                </div>
            </div>
            </>
    );
}
