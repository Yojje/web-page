import React from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { PlusCircle, Hash, Users } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Community = () => {
  const [servers] = React.useState([
    { id: 1, name: "Beginners Yoga", members: 1234 },
    { id: 2, name: "Advanced Practice", members: 856 },
    { id: 3, name: "Meditation", members: 654 },
    { id: 4, name: "Yoga Teachers", members: 432 },
  ]);

  const [messages] = React.useState([
    { id: 1, author: "Sarah", content: "Just finished an amazing morning practice!", time: "10:30 AM" },
    { id: 2, author: "Mike", content: "Anyone here practicing Ashtanga?", time: "10:32 AM" },
    { id: 3, author: "Emma", content: "I'm looking for meditation buddies!", time: "10:35 AM" },
  ]);

  return (
    <div className="flex h-screen bg-background">
      {/* Servers sidebar */}
      <div className="w-60 bg-muted p-4 border-r">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold">Communities</h2>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <PlusCircle className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Create New Community</h3>
                <Input placeholder="Community name" />
                <Button className="w-full">Create Community</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <ScrollArea className="h-[calc(100vh-8rem)]">
          <div className="space-y-2">
            {servers.map((server) => (
              <Button
                key={server.id}
                variant="ghost"
                className="w-full justify-start gap-2"
              >
                <Hash className="h-4 w-4" />
                <span>{server.name}</span>
                <span className="ml-auto text-xs text-muted-foreground">
                  <Users className="h-3 w-3 inline mr-1" />
                  {server.members}
                </span>
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Chat area */}
      <div className="flex-1 flex flex-col">
        <div className="border-b p-4">
          <h2 className="font-semibold">Welcome to Yoje Community</h2>
          <p className="text-sm text-muted-foreground">
            Connect with fellow yoga enthusiasts from around the world
          </p>
        </div>

        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className="flex gap-2">
                <div className="bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center">
                  {message.author[0]}
                </div>
                <div>
                  <div className="flex gap-2 items-baseline">
                    <span className="font-semibold">{message.author}</span>
                    <span className="text-xs text-muted-foreground">
                      {message.time}
                    </span>
                  </div>
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="border-t p-4">
          <Input placeholder="Type your message..." className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Community;