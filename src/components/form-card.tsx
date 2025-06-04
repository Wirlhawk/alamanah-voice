import * as React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FormBuilder from "./form-builder";
import Image from "next/image";

export default function FormCard() {
    return (
        <Card className="w-[22rem] shadow-active neu neu-pressed">
            <CardHeader className="flex flex-row gap-4 items-center">
                <Image
                    src="/osis.png"
                    alt=""
                    width={200}
                    height={200}
                    className="size-16 my-auto object-contain"
                />
                <div>
                    <CardTitle className="text-2xl font-bold text-blue-600">
                        Kotak Aspirasi
                    </CardTitle>
                    {/* <CardDescription>
                        Lorem, ipsum dolor sit amet consectetur adipisicing{" "}
                    </CardDescription> */}
                </div>
            </CardHeader>
            <CardContent>
                <FormBuilder />
            </CardContent>
        </Card>
    );
}

// export default function FormCard() {
//     return (
//         <div className="w-[22rem] bg-card neu neu-pressed border-black rounded-2xl">
//             <div className="bg-green-400 p-5 text-center font-bold rounded-t-2xl">
//                 <h1 className="text-xl">Sampaikan Aspirasimu Disini</h1>
//             </div>

//             <div className="p-5">
//                 <FormBuilder />
//             </div>
//         </div>
//     );
// }
