export namespace siteMetadata {
    let title: string;
    let description: string;
    let author: string;
}
export let plugins: (string | {
    resolve: string;
    options: {
        prettier: boolean;
        svgo: boolean;
        name?: undefined;
        short_name?: undefined;
        icon?: undefined;
        prefixes?: undefined;
    };
} | {
    resolve: string;
    options: {
        name: string;
        short_name: string;
        icon: string;
        prettier?: undefined;
        svgo?: undefined;
        prefixes?: undefined;
    };
} | {
    resolve: string;
    options: {
        prefixes: string[];
        prettier?: undefined;
        svgo?: undefined;
        name?: undefined;
        short_name?: undefined;
        icon?: undefined;
    };
})[];
