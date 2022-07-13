import type {
    PropTagsListPage,
    PluginOptions,
    DocMetadataBase,
    VersionMetadata,
    DocFrontMatter,
    LoadedContent,
    LoadedVersion,
} from '@docusaurus/plugin-content-docs';
import type { LoadContext, Plugin } from '@docusaurus/types';

export default async function pluginContentDocs(
    context: LoadContext,
    options: PluginOptions,
) {
    console.log('context', context)

    return {
        name: 'docusaurus-plugin-extends-frontMatter',
        async loadContent() {
            console.log('loadContent')
            return {}
        },
        async contentLoaded({ content, actions }) {
            console.log('contentLoaded')
        }
    }
}