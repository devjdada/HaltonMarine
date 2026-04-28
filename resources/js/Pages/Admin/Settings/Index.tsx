import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Textarea } from '@/Components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/Components/ui/card';
import { FormEventHandler } from 'react';

interface Settings {
    [key: string]: string;
}

export default function Index({ settings }: { settings: Settings }) {
    const { data, setData, post, processing, errors } = useForm({
        about_title: settings.about_title || '',
        about_subheading: settings.about_subheading || '',
        about_description_1: settings.about_description_1 || '',
        about_description_2: settings.about_description_2 || '',
        about_main_image: null as File | string | null,
        about_indigenous_heading: settings.about_indigenous_heading || '',
        about_indigenous_text: settings.about_indigenous_text || '',
        about_indigenous_image: null as File | string | null,
        mission_title: settings.mission_title || '',
        mission_description: settings.mission_description || '',
        vision_title: settings.vision_title || '',
        vision_description: settings.vision_description || '',
        commitment_title: settings.commitment_title || '',
        commitment_description: settings.commitment_description || '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('admin.settings.update'), {
            forceFormData: true,
        });
    };

    return (
        <AdminLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Website Settings</h2>}
        >
            <Head title="Website Settings" />

            <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                <div className="p-6 text-gray-900 dark:text-gray-100">
                    <form onSubmit={submit} className="space-y-8 max-w-4xl">
                        {/* About Section */}
                        <Card>
                            <CardHeader>
                                <CardTitle>About Section</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="about_title">About Title</Label>
                                        <Input
                                            id="about_title"
                                            value={data.about_title}
                                            onChange={(e) => setData('about_title', e.target.value)}
                                            className="mt-1"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="about_subheading">Subheading</Label>
                                        <Input
                                            id="about_subheading"
                                            value={data.about_subheading}
                                            onChange={(e) => setData('about_subheading', e.target.value)}
                                            className="mt-1"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <Label htmlFor="about_description_1">Description Paragraph 1</Label>
                                    <Textarea
                                        id="about_description_1"
                                        value={data.about_description_1}
                                        onChange={(e) => setData('about_description_1', e.target.value)}
                                        className="mt-1"
                                        rows={4}
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="about_description_2">Description Paragraph 2</Label>
                                    <Textarea
                                        id="about_description_2"
                                        value={data.about_description_2}
                                        onChange={(e) => setData('about_description_2', e.target.value)}
                                        className="mt-1"
                                        rows={4}
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="about_main_image">Main Image</Label>
                                    {settings.about_main_image && (
                                        <div className="mb-2">
                                            <img src={settings.about_main_image} alt="current" className="h-20 rounded border" />
                                        </div>
                                    )}
                                    <Input
                                        id="about_main_image"
                                        type="file"
                                        onChange={(e) => setData('about_main_image', e.target.files?.[0] || null)}
                                        className="mt-1"
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Indigenous Excellence */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Indigenous Excellence Section</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <Label htmlFor="about_indigenous_heading">Heading</Label>
                                    <Input
                                        id="about_indigenous_heading"
                                        value={data.about_indigenous_heading}
                                        onChange={(e) => setData('about_indigenous_heading', e.target.value)}
                                        className="mt-1"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="about_indigenous_text">Description Text</Label>
                                    <Textarea
                                        id="about_indigenous_text"
                                        value={data.about_indigenous_text}
                                        onChange={(e) => setData('about_indigenous_text', e.target.value)}
                                        className="mt-1"
                                        rows={4}
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="about_indigenous_image">Indigenous Image</Label>
                                    {settings.about_indigenous_image && (
                                        <div className="mb-2">
                                            <img src={settings.about_indigenous_image} alt="current" className="h-20 rounded border" />
                                        </div>
                                    )}
                                    <Input
                                        id="about_indigenous_image"
                                        type="file"
                                        onChange={(e) => setData('about_indigenous_image', e.target.files?.[0] || null)}
                                        className="mt-1"
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Mission, Vision, Commitment */}
                        <div className="grid md:grid-cols-3 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">Mission</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <Label htmlFor="mission_title">Title</Label>
                                        <Input
                                            id="mission_title"
                                            value={data.mission_title}
                                            onChange={(e) => setData('mission_title', e.target.value)}
                                            className="mt-1"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="mission_description">Description</Label>
                                        <Textarea
                                            id="mission_description"
                                            value={data.mission_description}
                                            onChange={(e) => setData('mission_description', e.target.value)}
                                            className="mt-1"
                                            rows={5}
                                        />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">Vision</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <Label htmlFor="vision_title">Title</Label>
                                        <Input
                                            id="vision_title"
                                            value={data.vision_title}
                                            onChange={(e) => setData('vision_title', e.target.value)}
                                            className="mt-1"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="vision_description">Description</Label>
                                        <Textarea
                                            id="vision_description"
                                            value={data.vision_description}
                                            onChange={(e) => setData('vision_description', e.target.value)}
                                            className="mt-1"
                                            rows={5}
                                        />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">Commitment</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <Label htmlFor="commitment_title">Title</Label>
                                        <Input
                                            id="commitment_title"
                                            value={data.commitment_title}
                                            onChange={(e) => setData('commitment_title', e.target.value)}
                                            className="mt-1"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="commitment_description">Description</Label>
                                        <Textarea
                                            id="commitment_description"
                                            value={data.commitment_description}
                                            onChange={(e) => setData('commitment_description', e.target.value)}
                                            className="mt-1"
                                            rows={5}
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="flex items-center gap-4">
                            <Button disabled={processing} size="lg">Save All Settings</Button>
                        </div>
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
}
