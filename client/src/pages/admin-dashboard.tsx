import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link, useLocation } from "wouter";
import {
  CircleUser,
  LogOut,
  FolderKanban,
  FileText,
  Briefcase,
  Code,
  MessageSquare,
  Settings,
} from "lucide-react";

export default function AdminDashboard() {
  const { user, logoutMutation } = useAuth();
  const [_, setLocation] = useLocation();

  const handleLogout = () => {
    logoutMutation.mutate();
    setLocation("/");
  };

  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Manage your portfolio content from here
          </p>
        </div>
        <div className="flex items-center mt-4 md:mt-0 space-x-4">
          <div className="flex items-center space-x-2">
            <CircleUser className="h-6 w-6 text-primary" />
            <span className="font-medium">{user?.username}</span>
          </div>
          <Button 
            variant="outline" 
            onClick={handleLogout}
            disabled={logoutMutation.isPending}
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Projects Card */}
        <Card>
          <CardHeader className="pb-3">
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
              <FolderKanban className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Projects</CardTitle>
            <CardDescription>
              Manage your portfolio projects
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <p>Add, edit, or delete your showcase projects. Update images, links, and technologies used.</p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link to="/admin/projects">Manage Projects</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Blog Posts Card */}
        <Card>
          <CardHeader className="pb-3">
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Blog Posts</CardTitle>
            <CardDescription>
              Create and edit your blog content
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <p>Write new articles, edit existing ones, or manage your blog drafts and publications.</p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link to="/admin/blogs">Manage Blog Posts</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Experience Card */}
        <Card>
          <CardHeader className="pb-3">
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
              <Briefcase className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Experience</CardTitle>
            <CardDescription>
              Update your work experience
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <p>Add new job positions, update existing roles, or rearrange the order of your work history.</p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link to="/admin/experiences">Manage Experience</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Skills Card */}
        <Card>
          <CardHeader className="pb-3">
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Skills</CardTitle>
            <CardDescription>
              Update your technical skills
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <p>Manage your technical skills by category, adjust proficiency levels, and organize their display order.</p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link to="/admin/skills">Manage Skills</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Contact Messages Card */}
        <Card>
          <CardHeader className="pb-3">
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Contact Messages</CardTitle>
            <CardDescription>
              View messages from visitors
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <p>Check messages sent through your contact form. Review inquiries and opportunities.</p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link to="/admin/contacts">View Messages</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Settings Card */}
        <Card>
          <CardHeader className="pb-3">
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
              <Settings className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Account Settings</CardTitle>
            <CardDescription>
              Manage your admin account
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <p>Update your password, manage admin permissions, and adjust your profile settings.</p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link to="/admin/settings">Manage Account</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-10 text-center text-sm text-muted-foreground">
        <p>
          Portfolio Admin Dashboard &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </div>
  );
}