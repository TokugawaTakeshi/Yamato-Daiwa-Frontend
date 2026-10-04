package com.yamato_daiwa.frontend.intellij_idea_plugin

import com.intellij.icons.AllIcons
import com.intellij.ide.fileTemplates.FileTemplateDescriptor
import com.intellij.ide.fileTemplates.FileTemplateGroupDescriptor
import com.intellij.ide.fileTemplates.FileTemplateGroupDescriptorFactory


class PagesTemplatesTemplatesGroupFactory : FileTemplateGroupDescriptorFactory {

  override fun getFileTemplatesDescriptor(): FileTemplateGroupDescriptor {

    val groupDescriptor = FileTemplateGroupDescriptor("YDF Pages Templates", AllIcons.Nodes.Folder)

    /* [ Theory ] No ".ft" must be here. */
    groupDescriptor.addTemplate(FileTemplateDescriptor("PugEntryPointExtendedFromRegularWebPageTemplate.pug"))

    return groupDescriptor

  }

}
